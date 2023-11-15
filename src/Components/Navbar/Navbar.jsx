import { Navbar, Container, Nav, NavDropdown, NavbarCollapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../icons/logo-trans.png";
import "./Navbar.css";
// import "bootstrap/dist/css/bootstrap.css"
// import { Navbar } from "react-bootstrap"

const NavbarComponent = () => {
  return (
    <div className="Nav">
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand href="/" className="left">
          <img src={ logo } alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="right_aligned">
          <Nav className="space">
            <Nav.Link href="/notes">Notes</Nav.Link>
            <Nav.Link href="about">About Us</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="login">LogIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
  );
};

export default NavbarComponent;
