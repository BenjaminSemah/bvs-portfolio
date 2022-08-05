import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link"

export function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="light"
      variant="light"
      sticky="top"
      className="navbar--container"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/#home-page" className="nav--bvs">HOME</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navlink--text">
              <Link to="/#about" className="navlink--text">About</Link>
            </Nav.Link>
            <Nav.Link className="navlink--text">
              <Link to="/#projects" className="navlink--text">Projects</Link>
            </Nav.Link>
            <Nav.Link className="navlink--text">
              <Link to="/blog#bloghome" className="navlink--text">Blog</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/#contact">
              <button className="nav--contact">Contact</button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
