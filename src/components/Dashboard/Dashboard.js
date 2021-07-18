import React, { Component } from 'react'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import Nav from '../Nav/Nav'
import VehicleCheck from '../VehicleCheck/VehicleCheck';
import PedCheck from '../PedCheck/PedCheck';
import CurrentCallsTable from '../CurrentCallsTable/CurrentCallsTable';

import "./Dashboard.css"
import CreateCall from '../CreateCall/CreateCall';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                
               <div><Nav/></div>
                <div><VehicleCheck/></div>
                <div><PedCheck/></div>
                <div><CurrentCallsTable/></div>
                <div><CreateCall/></div>
           </div>
        )
    }

}

export default Dashboard
