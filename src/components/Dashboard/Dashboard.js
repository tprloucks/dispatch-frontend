import React, { Component } from 'react'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import Nav from '../Nav/Nav'
import VehicleCheck from '../VehicleCheck/VehicleCheck';
import PedCheck from '../PedCheck/PedCheck';
import CurrentCallsTable from '../CurrentCallsTable/CurrentCallsTable';
import Officer from "../Officers/officer"
import Map from "../Map/Map"


// import Map from '../Map/Map';

import "./Dashboard.css"

export class Dashboard extends Component {
    render() {
        return (
            <div>
                 
                 <Map></Map>
                <CurrentCallsTable/>
                <VehicleCheck/>
                <PedCheck/>
                <Nav/>
                <Officer/>
                
                
                
                {/* <div><Map/></div> */}
           </div>
        )
    }

}

export default Dashboard
