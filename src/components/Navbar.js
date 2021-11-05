import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'

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
          <ReactBootStrap.Nav.Link href="#action1">Home</ReactBootStrap.Nav.Link>
          
          <ReactBootStrap.NavDropdown title="Sections" id="navbarScrollingDropdown">
            <ReactBootStrap.NavDropdown.Item href="#action3">Breakfast</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action4"> Dinner</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action5">
              Dessert
            </ReactBootStrap.NavDropdown.Item>
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
