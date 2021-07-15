import React, { Component } from 'react'
import { isEmpty, isEmail } from "validator";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import Axios from "../utils/Axios";
import checkIfUserIsAuth from "../utils/checkIfUserIsAuth";
import setAxiosAuthToken from "../utils/setAxiosAuthToken";
import ("./Login.css")

export class Login extends Component {
    state={
        email:"",
        emailError:"",
        emailOnFocus:false,
        password:"",
        passwordError:"",
        passwordOnFocus:false,
        canSubmit:true
    }
    handleUserLogin = (user) => {
        this.setState({
          user: {
            email: user.email,
          },
        });
      };
    componentDidMount(){
        let isAuth = checkIfUserIsAuth()

        if(isAuth){
            this.props.history.push("/dashboard")
        }
    }
    handleOnChange=(event)=>{
        this.setState(
            {
                [event.target.name]:event.target.value,
            },
            ()=>{
                if(event.target.name ==="email"){
                    if(isEmpty(this.state.email)){
                        this.setState({
                            emailError:"Email cannot be empty",
                            canSubmit:true,
                        })
                    }else{
                        this.setState({
                            passwordError:"",
                        })
                    }
                }
            }
        )
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.canSubmit === true) {
          if (this.state.emailOnFocus && this.state.passwordOnFocus) {
            if (
              this.state.emailError.length === 0 &&
              this.state.passwordError.length === 0
            ) {
              this.setState({
                canSubmit: false,
              });
            } else {
              this.setState({
                canSubmit: true,
              });
            }
          }
        }
      }
    
      handleInputOnFocus = (event) => {
        if (!this.state[`${event.target.name}OnFocus`]) {
          this.setState({
            [`${event.target.name}OnFocus`]: true,
          });
        }
      };
    
      handleOnSubmit = async (event) => {
        event.preventDefault();
    
        try {
          let result = await Axios.post("/api/user/login", {
            email: this.state.email,
            password: this.state.password,
          });
    
          let jwtToken = result.data.payload;
    
          console.log(jwtToken);
          //call setAxiosAuthToken here
          setAxiosAuthToken(jwtToken);
    
          let decodedToken = jwtDecode(jwtToken);
          console.log(decodedToken);
    
          this.handleUserLogin(decodedToken);
    
          window.localStorage.setItem("jwtToken", jwtToken);
          toast.success("Login success!");
    
          this.props.history.push("/dashboard");
        } catch (e) {
            console.log(e);
          if (e.response.status === 429) {
            toast.error(e.response.data);
          } else {
            toast.error(e.response.data.payload);
          }
        }
      };
    

    render() {
        const{email, emailError, password, passwordError, canSubmit}=
        this.state
        return (
            <div>
             <p style={{color:"red"}}>AUTHORIZED LAW ENFORCEMENT USE ONLY!</p>
             
        <div className="background-wrap">
          <div className="background" />
        </div>
        <form id="accesspanel" onSubmit={this.handleOnSubmit}>
          <h1 id="litheader">PATRIOT CAD SYSTEMS</h1>
          <div className="inset">
            <p>
              <input 
              type="text" 
              name="email" 
              id="email" 
              placeholder="Email address" 
              value={email}
              onChange={this.handleOnChange}
              onFocus={this.handleInputOnFocus}
              style={{color:"green"}} 
              />
              <div className="errorMessage">{emailError && emailError}</div>
            </p>
            <p>
              <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Access code"
              value={password} 
              onFocus={this.handleInputOnFocus}
              onChange={this.handleOnChange}
              style={{color:"green"}}
              />
              <div className="errorMessage">
                  {passwordError && passwordError}
            </div>
            </p>
            <div style={{textAlign: 'center'}}>
              
            </div>
            <input className="loginLoginValue" type="hidden" name="service" defaultValue="login" />
          </div>
          <p className="p-container">
            <input type="submit" name="Login" id="go" disabled={canSubmit} defaultValue="Authorize" />
          </p>
        </form>
      </div>
        )
    }
}

export default Login
