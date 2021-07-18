import React, { Component } from 'react'
import axios from 'axios'
import "./CurrentCallsTable.css"
import Draggable, {DraggableCore} from 'react-draggable'

export class CurrentCallsTable extends Component {
   async componentDidMount(){
     const res = await await fetch(
      "https://www.dallasopendata.com/resource/juse-v5tw.json?location=L B J Fwy Eb"
     )
     const data = await res.json()
     


   }
    render() {
        return (
            <Draggable>
            <div>
            <h1><span className="blue"></span>Current Calls<span className="blue"></span> <span className="yellow">Alerts</span></h1>
            <h2>ONLY RESPOND TO ASSIGNED CALLS</h2>
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
                <tr>
                  <td>Fire</td>
                  <td>9518 E. 20th</td>
                  <td>1</td>
                  <td>FIRE/EMS</td>
                  <td>LADDER TRUCK/ TANKER</td>
                  

                </tr>
                <tr>
                  <td>Goferf</td>
                  <td>9518</td>
                  <td>6369</td>
                  <td>01:32:50</td>
                </tr>
                <tr>
                  <td>Googleregewrg</td>
                  <td>9518</td>
                  <td>6369</td>
                  <td>01:32:50</td>
                  <td>01:32:50</td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>7326</td>
                  <td>10437</td>
                  <td>00:51:22</td>
                </tr>
                <tr>
                  <td>Amazon</td>
                  <td>4162</td>
                  <td>5327</td>
                  <td>00:24:34</td>
                </tr>
                <tr>
                  <td>LinkedIn</td>
                  <td>3654</td>
                  <td>2961</td>
                  <td>00:12:10</td>
                </tr>
                <tr>
                  <td>CodePen</td>
                  <td>2002</td>
                  <td>4135</td>
                  <td>00:46:19</td>
                </tr>
                <tr>
                  <td>GitHub</td>
                  <td>4623</td>
                  <td>3486</td>
                  <td>00:31:52</td>
                </tr>
              </tbody>
            </table>
          </div>
          </Draggable>
        )
    }
}

export default CurrentCallsTable
