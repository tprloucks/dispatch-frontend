import React, { Component , useState, useEffect} from 'react'
import axios from 'axios'

import Draggable, {DraggableCore} from 'react-draggable'
import Collapsible from 'react-collapsible';
import { isEmpty } from 'lodash';
import { Button } from '@material-ui/core';


export class PedCheck extends Component {
   
    state={
        pedArray:[],
        pedInfo:[],
        pedSearchInput:"",
        inputError:"",

    }

    async componentDidMount(){
      this.getPedInfo()
      axios.get("http://localhost:8080/api/ped/get-by-id/60f18ee364c6af637cd4bc03")
      
        .then(response =>{
          
          if(response.status === 200 && response !=null){
            
            // this.setState({
            //   pedArray:response.data.payload
            // })
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
      axios.get(`http://localhost:8080/api/ped/get-by-id/${this.state.pedSearchInput}`)
        .then((response)=>{
          const data = response.data.payload
          // if (data.warrants.length > 0){
          //   alert("Warrants Found!")
          // }
          this.setState({
            pedArray:data
          })
          if (data.wanted===true){
            alert("Warrants Found!")
          }
          console.log('data has been recived!!');
        })
        .catch(()=>{
          alert('Error retriveing data!!')
        })
    }
    
    
    

    handlePedOnChange= (event)=>{
      this.setState({
          pedSearchInput:event.target.value
      })
      
  }
    

    handleOnSubmit= async(event)=>{
      event.preventDefault();
      this.getPedInfo()
     
        
     
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
                        name="pedInput"
                        onChange={this.handlePedOnChange}
                        
                        placeholder="Full Name"/>
                        
                        <Button variant="outlined" type="submit">Search</Button>
                        <br />
                        * Customize this from by clicking and dragging.
                       
                        <div>
                        Name:<h1> <p color="red">{this.state.pedArray.firstName} {this.state.pedArray.lastName}</p> </h1>
                          <br />
                          DOB:<h1><p> {this.state.pedArray.DOB}</p> </h1>
                          <br />
                          Address:<h1> <p> {this.state.pedArray.address}</p> </h1>
                          <br />
                          Warrants: <h1><p> {this.state.pedArray.warrants}</p> </h1>

                          
                            

                            {/* {this.state.pedArray.map((ped, index)=>{
                                return(
                                    <div key={ped}>
                                      {ped.lastName}, {ped.firstName}
                                    </div>
                                )
                            })} */}
                        </div>
                    </form>
                </Draggable>
                </Collapsible>
            </div>
        )
    }
}

export default PedCheck
