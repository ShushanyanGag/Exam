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
        <Navbar.Brand href="logo" className="left">
          <img src={ logo } alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="right_aligned">
          <Nav className="space">
            <NavDropdown title="Products" className="dropdown_menu">
              <NavDropdown.Item href="products/tea" className="dropdown">Tea</NavDropdown.Item>
              <NavDropdown.Item href="products/coffee" className="dropdown">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="products/chocolate" className="dropdown">Chocolate</NavDropdown.Item>
              <NavDropdown.Item href="products/promo" className="dropdown">Promo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="about">About Us</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
            <Nav.Link href="login">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
  );
};

export default NavbarComponent;
