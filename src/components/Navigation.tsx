import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='nav--bvs'>{"<BVS>"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <button className='nav--contact'>Contact</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
