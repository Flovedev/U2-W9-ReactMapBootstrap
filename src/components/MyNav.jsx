import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";

export default function MyNav({ title, first, second }) {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="#">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-grow-1">
            <Nav.Link href="#">{first}</Nav.Link>
            <Nav.Link href="#">{second}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
