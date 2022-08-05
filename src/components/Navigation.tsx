import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

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
        <Navbar.Brand href="#home" to="/" as={NavLink}>
          <h2 className="nav--bvs">{"HOME"}</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navlink--text" href="#features">
              <p className="navlink--text">About</p>
            </Nav.Link>
            <Nav.Link className="navlink--text" href="#pricing">
              <p className="navlink--text">Projects</p>
            </Nav.Link>
            <Nav.Link className="navlink--text" to="/blog" as={NavLink}>
              <p className="navlink--text">Blog</p>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <button className="nav--contact">Contact</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
