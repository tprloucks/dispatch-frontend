import React, { Component } from 'react'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

export class VehicleCheck extends Component {
    render() {
        return (
            <div>
                <Draggable>
                    <form action="">
                        <h1>Vehicle Check</h1>
                        <input type="text" placeholder="License Plate#" />
                        * Customize this from by clicking and dragging.

                    </form>
                </Draggable>
            </div>
        )
    }
}

export default VehicleCheck