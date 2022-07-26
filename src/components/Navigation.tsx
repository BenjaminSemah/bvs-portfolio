import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="shadow-md mb-3">
        <Container>
          <Navbar.Brand to="/" as={NavLink}>
            HOME
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
            <Nav.Link to="/projects" as={NavLink}>
              Projects
            </Nav.Link>
            <Nav.Link to="/blog" as={NavLink}>
              Blog
            </Nav.Link>
          </Nav>
          <Button
            style={{ width: "3rem", height: "3rem" }}
            variant="light"
            className="rounded-circle"
          >
            BVS
          </Button>
        </Container>
      </Navbar>
    </>
  );
}
