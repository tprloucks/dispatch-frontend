import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import setAxiosAuthToken from "../utils/setAxiosAuthToken";
import "./Nav.css";

export class Nav extends Component {
    handleUserLogout = () => {
        window.localStorage.removeItem("jwtToken");
        setAxiosAuthToken(null);
        this.setState({
          user: null,
        });
      };
    render() {
        return (
            <div>
            <meta charSet="UTF-8" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" rel="stylesheet" />
            <title>PATRIOT CAD SYSTEMS</title>
            <ul className="menu">
              <li className="menu_list">
                <span className="front fas fa-home" />
                <a href="/login"onClick={this.handleUserLogout} className="side">Contact Station</a>
              </li>
              <li className="menu_list">
                <span className="front fas fa-info" />
                <a href="#" className="side">References</a>
              </li>
              <li className="menu_list">
                <span className="front fas fa-briefcase" />
                <a href="#" className="side">Duty Belt</a>
              </li>
              <li className="menu_list">
                <span className="front fas fa-paperclip" />
                <a href="#" className="side">10-Codes</a>
              </li>
              <li className="menu_list">
                <span className="front fas fa-paper-plane" />
                <a onClick={this.handleUserLogout} href="/login"  className="side">Logout</a>
              </li>
            </ul>
          </div>
        )
    }
}

export default Nav
