import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
      <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
      <Collapse isOpen={isOpen} navbar>
      <NavbarBrand tag={Link} to="/events/new">Add Event</NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
      <NavbarBrand tag={Link} to="/events">View All Events</NavbarBrand>
                  <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
      <NavbarBrand tag={Link} to="/events/music">View Music Events</NavbarBrand>
                        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
      </Collapse>
    </Navbar>
  );
};

export default AppNavbar;