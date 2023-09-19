import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  RiHome3Line,
  RiUser3Line,
  RiCarLine,
  RiFileList3Line,
  RiLogoutCircleRLine,
  RiDashboardLine,
  RiMessage3Line,
} from "react-icons/ri";
import "./sidebar.scss";
import { useAppDispatch } from "../../../store/Hooks";
import { question } from "../../../helpers/functions/Swal";
import { encryptedLocalStorage } from "../../../helpers/functions/EncryptStorage";
import { logout } from "../../../store/slices/AuthSlice";
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleLogout = () => {
    question("Logout", "Are you sure to logout ?").then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        encryptedLocalStorage.removeItem("token");
        navigate("/");
      }
    });
  };

  return (
    <Navbar expand="lg" className="admin-sidebar">
      <Container>
        <Navbar.Brand as={Link} to="/admin">
          <h1 className="admin-logo">
            Rent<span>Go</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin" active={pathname === "/admin"}>
              <RiDashboardLine /> Dashboard
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin/users"
              active={pathname === "/admin/users"}
            >
              <RiUser3Line /> Users
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin"
              active={pathname === "/admin/vehicles"}
            >
              <RiCarLine /> Vehicles
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin"
              active={pathname === "/admin/reservations"}
            >
              <RiFileList3Line /> Reservations
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin/contact-message"
              active={pathname === "/admin/contact-message"}
            >
              <RiMessage3Line /> Contact Messages
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <RiHome3Line /> Web Site
            </Nav.Link>
            <Nav.Link onClick={handleLogout}>
              <RiLogoutCircleRLine /> Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
