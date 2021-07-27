import React, { Component } from 'react'
import Draggable from 'react-draggable'

export class Code extends Component {
    render() {
        return (
            <div>
                <Draggable>
                <form action="">
                    <h1>Code Reference</h1>
                    10-0 - Use caution
10-4 - Okay, affirmative
<br />
10-13 - Advise weather and road conditions
<br />
10-14 - Prowler report; Convoy or escort detail
<br />
10-15 - Civil disturbance; Prisoner in custody
<br />
10-22 - Cancel last message; Investigate a break-in
<br />
10-26 - Detaining a suspect; ETA (estimated time of arrival); Larceny
<br />
10-27 - Driver’s licence/permit/registration information; Rape report
<br />
10-63 - Prepare to make a written copy or receive assistance
<br />
10-75 - In contact with; Wanted or stolen
<br />
10-78 - Need assistance
<br />
10-79 - Bomb threat; Notify coroner
<br />
10-101 - Civil disturbance; What’s your status?
<br />
10-106 - Secure
<br />
10-999 - Officer down
<br />
<br />
<br />
*******click to drag********
                </form>
            </Draggable>
            </div>
        )
    }
}

export default Code





