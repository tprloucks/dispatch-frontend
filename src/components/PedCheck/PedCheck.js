import React, { Component } from 'react'
import Draggable, {DraggableCore} from 'react-draggable'
export class PedCheck extends Component {
    render() {
        return (
            <div>
                <Draggable>
                    <form action="">
                        <h1>Persons Check</h1>
                        <input type="text" placeholder="Last Name"/>
                        <input type="text" placeholder="First Name"/>
                        * Customize this from by clicking and dragging.
                    </form>
                </Draggable>
            </div>
        )
    }
}

export default PedCheck
