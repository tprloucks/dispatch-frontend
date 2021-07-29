import React, { Component } from 'react'
import axios from 'axios'
import "../CurrentCallsTable/CurrentCallsTable.css"
import Draggable from 'react-draggable'
import { Button } from '@material-ui/core';
export class officer extends Component {
    state = {
        officerArray:[],
        lastNameInput:"",
        badgeInput:"",
        beatInput:"",
        statusInput:""
    }
async componentDidMount(){
    axios.get("http://localhost:8080/api/officer/get-all-officer")
        .then(response =>{
            if(response.status === 200 && response !=null){
                this.setState({
                    officerArray:response.data.payload
                })
                console.log(response.data.payload);
            }else{
                console.log("Dallas we got a problem");
            }
        })
        .catch(error=>{
            console.log(error);
        })
}
handleOfficerOnChange = (event) => {
    this.setState({
      lastNameInput: event.target.value,
      badgeInput: event.target.value,
      statusInput: event.target.value,
      beatInput: event.target.value,
    });
  };
handleOnSubmit= async (event)=>{
    event.preventDefault()
    try {
        let createdOfficer= await axios.post("http://localhost:8080/api/officer/create-officer",
        {
            badge:this.state.badgeInput,
            lastName:this.state.lastNameInput,
            beat:this.state.beatInput,
            status:this.state.statusInput
        }
        )
        console.log(createdOfficer);
    } catch (error) {
        console.log(error);
    }
}

render() {
      
    return (
       
        <div>
          <div>
          <div>
            <Draggable>
                <form onSubmit={this.handleOnSubmit}>
                    <h1>Add Officer</h1>
                    <input type="text" name="lastNameInput" onChange={this.state.handleOfficerOnChange}  placeholder="Last Name"/>
                    <input type="text" name="badgeInput" onChange={this.state.handleOfficerOnChange}  placeholder="Badge Number"/>
                    <input type="text" name="beatInput" onChange={this.state.handleOfficerOnChange}  placeholder="Beat"/>
                    <input type="text" name="statusInput" onChange={this.state.handleOfficerOnChange}  placeholder="Status"/>
                    <Button variant="outlined" type="submit">Search</Button>
                </form>
            </Draggable>
        </div>
           <Draggable>
             
               
              <table className="container">
              <thead>
             
                <tr>
                  <th><h1>Name</h1></th>
                  <th><h1>Badge</h1></th>
                  <th><h1>Beat</h1></th>
                  <th><h1>Status</h1></th>
                </tr>
              </thead>
             
              <tbody>
              {this.state.officerArray.map((officer)=>{
             return(
            <tr key={officer}>
              <td>{officer.lastName}</td>
              <td>{officer.badge}</td>
              <td>{officer.beat}</td>
              <td>{officer.status}</td>
        
  
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

export default officer
