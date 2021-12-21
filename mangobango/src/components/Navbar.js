import React, { useState } from 'react';
import "../styles/NavBar.css";
// import {
//     Navbar,
//     Nav,
//     NavItem,
//     NavLink,
//   } from 'reactstrap';
import { Navbar, Nav, NavLink, NavItem, NavbarBrand} from "reactstrap"

function NavBar() {

  return (
    <div>
        <Navbar id="navbar" color="dark" dark expand="md">
            <Nav className="me-auto" navbar>
            <NavItem>
                <NavbarBrand href="/" >MangoBango</NavbarBrand>
            </NavItem>
            </Nav>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/login">Log in</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/signup">Sign up</NavLink>
            </NavItem>
            </Nav>
        </Navbar>
    </div>
  );
}

export default NavBar;