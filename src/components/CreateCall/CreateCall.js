import React, { Component } from 'react'
import Draggable from 'react-draggable'
export class CreateCall extends Component {
    render() {
        return (
            <div>
            <Draggable>
                <form action="">
                    <h1>Create Call</h1>
                    <input type="text" placeholder="Location"/>
                    <input type="text" placeholder="Nature"/>
                    <input type="text" placeholder="Type"/>
                    <input type="text" placeholder="Priority"/>
                    <input type="text" placeholder="Assigned Units"/>
                    * Customize this from by clicking and dragging.
                </form>
            </Draggable>
        </div>
        )
    }
}

export default CreateCall
