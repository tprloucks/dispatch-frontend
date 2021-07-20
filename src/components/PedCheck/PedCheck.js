import React, { Component , useState, useEffect} from 'react'
import axios from 'axios'

import Draggable, {DraggableCore} from 'react-draggable'
import Collapsible from 'react-collapsible';


export class PedCheck extends Component {
   
    state={
        pedArray:[],
        
    }
    async componentDidMount(){
      
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

    handlePedOnChange= (event)=>{
        this.setState({
            pedSearchInput:event.target.value
        })
    }

    // handleOnSubmit= async(event)=>{
    //     event.preventDefault()
    //     if (this.state.pedSearchInput.length === 0){
    //         this.setState({
    //             error:true,
    //             errorMessage:"Field can not be empty"
    //         })
    //     }else{
    //         let allPed = await axios.get(
    //             `${URL}/api/ped/get-all-ped`
    //         )
    //         let checkIfPedExists= this.state.pedArray.findIndex(
    //             (item)=>
    //             item.lastName===
    //             this.state.pedSearchInput
    //         )
    //         if(checkIfPedExists > -1){
               
    //             this.setState({
    //                 pedData:
    //             })
    //         }

    //     }
    // }
    render() {
        return (
            
            <div>
              <Collapsible trigger="Start here">
                <Draggable>
                    <form >
                        <h1>Persons Check</h1>
                        <input 
                        type="text" 
                       
                        
                        
                        placeholder="Full Name"/>
                        
                        <button type="submit">Search</button>
                        * Customize this from by clicking and dragging.
                       
                        <div>
                            {this.state.pedArray.map((ped, index)=>{
                                return(
                                    <div key={ped}>
                                        {ped.firstName}
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
