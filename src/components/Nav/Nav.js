import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

export class Nav extends Component {
    render() {
        return (
            <div>
            <meta charSet="UTF-8" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" rel="stylesheet" />
            <title>PATRIOT CAD SYSTEMS</title>
            <ul className="menu">
              <li className="menu_list">
                <span className="front fas fa-home" />
                <a href="#" className="side">Contact Station</a>
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
                <span className="front fas fa-paper-plane" />
                <a href="#" className="side">10-Codes</a>
              </li>
              <li className="menu_list">
                  <NavLink to="/login">
                <span className="front fas fa-paper-plane" />
                Logout</NavLink>

              </li>
            </ul>
          </div>
        )
    }
}

export default Nav
