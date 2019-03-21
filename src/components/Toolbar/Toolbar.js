import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';

const Toolbar = () => {
    return (
        <Navbar dark color="dark" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Shop</NavbarBrand>

            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={RouterNavLink} to="/" exact>Message</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Toolbar;