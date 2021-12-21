import React, { useState } from 'react';
import "../styles/NavBar.css";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

function NavBar() {

  return (
    <div>
        <Navbar id="navbar" color="dark" dark expand="md" fixed="top" full light>
            <Nav className="me-auto" navbar>
            <NavItem id="item">
                <NavLink href="/">MangoBango</NavLink>
            </NavItem>
            </Nav>
        </Navbar>
    </div>
  );
}

export default NavBar;