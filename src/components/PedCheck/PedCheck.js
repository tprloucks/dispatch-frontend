import React, { Component , useState, useEffect} from 'react'
import axios from 'axios'

import Draggable, {DraggableCore} from 'react-draggable'
import Collapsible from 'react-collapsible';
import { isEmpty } from 'lodash';


export class PedCheck extends Component {
   
    state={
        pedArray:[],
        pedInfo:[],
        pedSearchInput:"",
        inputError:"",

    }

    async componentDidMount(){
      this.getPedInfo()
      axios.get("http://localhost:8080/api/ped/get-all-ped/")
      
        .then(response =>{
          
          if(response.status === 200 && response !=null){
            
            this.setState({
              pedArray:response.data.payload
            })
            console.log(response.data);
          }else{
            console.log("we got a problem houston");
          }
        })
        .catch(error=>{
          console.log(error);
        })
     
      }

    getPedInfo=()=>{
      axios.get("http://localhost:8080/api/ped/get-all-ped/")
        .then((response)=>{
          const data = response.data
          this.setState({
            pedInfo:data
          })
          console.log('data has been recived!!');
        })
        .catch(()=>{
          alert('Error retriveing data!!')
        })
    }
    
    
    

    handlePedOnChange= (event)=>{
        this.setState({
            [event.target.name]: event.target.value,
        },
        ()=>{
          if(event.targe.name ==="fullName"){
            if(isEmpty(this.state.pedSearchInput)){
              this.setState({
                inputError:"Field Can not be blank"
              })
            }else{
              this.setState({
                inputError:""
              })
            }
          }
        },
        
        )
    }

    handleOnSubmit= async(event)=>{
      event.preventDefault();
  
        try {
          let result = await axios.get(
            "http://localhost:8080/api/ped/get-all-ped/"
          )
          console.log("this is result on on submit");
          console.log(result);
        } catch (error) {
          console.log(error);
        }
     
    }
  
    render() {
        return (
            
            <div>
              <Collapsible trigger="Start here">
                <Draggable>
                    <form onSubmit={this.handleOnSubmit}>
                        <h1>Persons Check</h1>
                        <input 
                        color="green"
                        type="text" 
                        name="ped"
                        onChange={this.handleOnChange}
                        
                        placeholder="Full Name"/>
                        
                        <button type="submit">Search</button>
                        * Customize this from by clicking and dragging.
                       
                        <div>
                          

                            {this.state.pedArray.map((ped, index)=>{
                                return(
                                    <div key={ped}>
                                      {ped.lastName}, {ped.firstName}
                                    </div>
                                )
                            })}
                        </div>
                    </form>
                </Draggable>
                </Collapsible>
            </div>
        )
    }
}

export default PedCheck
