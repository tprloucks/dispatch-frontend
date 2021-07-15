import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

const MainRouter = (props)=>{
    return(
        <Router>
            <React.Fragment>
                <Route exact path="/" component={Home} />

            </React.Fragment>

        </Router>
    )
}
export default MainRouter