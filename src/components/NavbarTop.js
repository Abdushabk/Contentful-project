import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const NavbarTop = () => {
    return <ReactBootStrap.Navbar bg="light" expand="lg" sticky="top">
    <ReactBootStrap.Container fluid>
      <ReactBootStrap.Navbar.Brand href="#">AVC Food Blog</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
      <ReactBootStrap.Navbar.Collapse id="navbarScroll">
        <ReactBootStrap.Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <ul>
                    <NavLink to='/'><li>HOME</li></NavLink>
                    
              
                </ul>
          <ReactBootStrap.NavDropdown title="Sections" id="navbarScrollingDropdown">
          <NavLink to='/breakfast'><li>Breakfast</li></NavLink>
          <NavLink to='/lunch'><li>Lunch</li></NavLink>
          <NavLink to='/dinner'><li>Dinner</li></NavLink>
          <NavLink to='/dessert'><li>Dessert</li></NavLink>
          </ReactBootStrap.NavDropdown>
          <ReactBootStrap.Nav.Link href="#" disabled>
            Contact Us 
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Form className="d-flex">
          <ReactBootStrap.FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
        </ReactBootStrap.Form>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>
}

export default NavbarTop
