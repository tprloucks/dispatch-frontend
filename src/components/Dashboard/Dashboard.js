import React, { Component } from 'react'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import Nav from '../Nav/Nav'
import VehicleCheck from '../VehicleCheck/VehicleCheck';
import PedCheck from '../PedCheck/PedCheck';
import CurrentCallsTable from '../CurrentCallsTable/CurrentCallsTable';
// import Map from '../Map/Map';

import "./Dashboard.css"
import CreateCall from '../CreateCall/CreateCall';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                
               <div><Nav/></div>
               <div><CurrentCallsTable/></div>
                <div><VehicleCheck/><PedCheck/></div>
                
                
                {/* <div><Map/></div> */}
           </div>
        )
    }

}

export default Dashboard
