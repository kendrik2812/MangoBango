import React, { useState } from 'react';
import "../styles/NavBar.css";
import { Navbar, Nav, NavLink, NavItem, NavbarBrand} from "reactstrap"
import logo from '../images/logo.png'

function NavBar() {

  return (
    <div>
        <ul className="navbar">
            <li className = "companyName"><img src={logo}></img>MangoBango</li>
            <li className="headerButton">
                <li><a href="/login">Log in</a></li>
                <li><a href="/signup">Sign up</a></li>
            </li>
        </ul>
    </div>
  );
}

export default NavBar;
