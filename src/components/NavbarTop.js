import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarTop = ({ handleSearchClick, handleClearQry }) => {
  return (
    <ReactBootStrap.Navbar bg="light" expand="lg" sticky="top">
      <ReactBootStrap.Container fluid>
        <ReactBootStrap.Navbar.Brand href="#" onClick={handleClearQry}>
          AVC Food Blog
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
        <ReactBootStrap.Navbar.Collapse id="navbarScroll">
          <ReactBootStrap.Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <ul>
              <NavLink to="/" onClick={handleClearQry}>
                <li>HOME</li>
              </NavLink>
            </ul>
            <ReactBootStrap.NavDropdown
              title="Sections"
              id="navbarScrollingDropdown"
            >
              <NavLink to="/breakfast" onClick={handleClearQry}>
                <li>Breakfast</li>
              </NavLink>
              <NavLink to="/lunch" onClick={handleClearQry}>
                <li>Lunch</li>
              </NavLink>
              {/* this should be "/dinner" */}
              <NavLink to="/blog" onClick={handleClearQry}>
                <li>Dinner</li>
              </NavLink>
              <NavLink to="/dessert" onClick={handleClearQry}>
                <li>Dessert</li>
              </NavLink>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.Nav.Link href="#" disabled onClick={handleClearQry}>
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
            <ReactBootStrap.Button
              variant="outline-success"
              onClick={(e) => handleSearchClick(e)}
            >
              {""}
              Search
            </ReactBootStrap.Button>
          </ReactBootStrap.Form>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  );
};

export default NavbarTop;
