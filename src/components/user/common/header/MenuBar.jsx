import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import { AiOutlineHome, AiFillCar, AiOutlineInfoCircle } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
const MenuBar = () => {
  return (
    <Container className="menubar-container">
      <Navbar collapseOnSelect expand="lg" className="menubar">
        <Navbar.Brand as={Link} to="/">
          <h2>
            Rent<span>Go</span>
          </h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 pe-3 menus">
            <Nav.Link as={Link} to="/">
              <AiOutlineHome /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/vehicles">
              <AiFillCar /> Vehicles
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <AiOutlineInfoCircle /> AboutUs
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <TfiHeadphoneAlt /> ContactUs
            </Nav.Link>
          </Nav>
          <Nav>
            <UserMenu />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default MenuBar;
