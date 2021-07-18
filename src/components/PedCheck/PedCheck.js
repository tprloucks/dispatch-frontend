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
    // async componentDidMount(){
    //     const url ="https://www.dallasopendata.com/resource/juse-v5tw.json?location=L B J Fwy Eb"
    //     const response = await fetch(url)
    //     const data = await response.json()
        
        
        
    // }
    

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
                       
                        
                        
                        placeholder="first and last name"/>
                        
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
