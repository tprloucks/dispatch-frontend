import React from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

const MainRouter = (props)=>{
    return(
        <Router>
            
            <React.Fragment>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login}/>

            </React.Fragment>

        </Router>
    )
}
export default MainRouter