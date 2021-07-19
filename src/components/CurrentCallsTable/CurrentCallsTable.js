import React, { Component } from 'react'
import axios from 'axios'
import "./CurrentCallsTable.css"
import Draggable, {DraggableCore} from 'react-draggable'

export class CurrentCallsTable extends Component {
  state={
    callArray:[]
  }
   async componentDidMount(){
      
      axios.get( "https://www.dallasopendata.com/resource/rfyj-p8vj.json")
        .then(response =>{
          if(response.status === 200 && response !=null){
            this.setState({
              callArray:response.data
            })
          }else{
            console.log("we got a problem houston");
          }
        })
        .catch(error=>{
          console.log(error);
        })
     
     


   }
    render() {
      
        return (
           
            <div>
              <div>
               <Draggable>
                  <table className="container">
                  <thead>
                 
                    <tr>
                      <th><h1>NOC</h1></th>
                      <th><h1>Location</h1></th>
                      <th><h1>Priority</h1></th>
                      <th><h1>Type</h1></th>
                      <th><h1>Equipment</h1></th>
                    </tr>
                  </thead>
                 
                  <tbody>
                  {this.state.callArray.map((call, index)=>{
                 return(
                <tr key={call}>
                  <td>{call.nature_of_call}</td>
                  <td>{call.location}</td>
                  <td></td>
                  <td>FIRE/EMS</td>
                  <td>LADDER TRUCK/ TANKER</td>
                </tr>
                 )
                 })}
                  </tbody>
                  <div>
                  
                  
            
              
                
               
            
            </div>
            
            </table>
            </Draggable>
                 )
                
              
              </div>
              </div>
            
          
          
        )
    }
}

export default CurrentCallsTable
