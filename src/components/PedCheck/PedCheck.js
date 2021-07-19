import React, { Component } from 'react'
import axios from 'axios'

import Draggable, {DraggableCore} from 'react-draggable'

export class PedCheck extends Component {
   
    state={
        pedArray:"",
        pedData:"",
        pedSearchInput:"",
        error:null,
        errorMessage:""
    }
    async componentDidMount(){
        let allPed = await axios.get("http://localhost:8080/api/ped/get-all-ped")
       console.log(allPed);
        
        
        
    }
    

    // handlePedOnChange= (event)=>{
    //     this.setState({
    //         pedSearchInput:event.target.value
    //     })
    // }

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
                <Draggable>
                    <form >
                        <h1>Persons Check</h1>
                        <input 
                        type="text" 
                       
                        
                        
                        placeholder="First Name, Last Name"/>
                        
                        <button type="submit">Search</button>
                        * Customize this from by clicking and dragging.
                       
                        <div>
                            {/* {this.state.pedArray} */}
                        </div>
                    </form>
                </Draggable>
            </div>
        )
    }
}

export default PedCheck
