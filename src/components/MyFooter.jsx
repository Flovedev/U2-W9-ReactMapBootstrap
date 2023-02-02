import { Container, Row, Col } from "react-bootstrap";

export default function MyFooter({ name }) {
  return (
    <Container fluid className="bg-dark text-white">
      <Row>
        <Col>2023 - {name}</Col>
        <Col className="bg-light text-dark"></Col>
        <Col>Contact Us</Col>
      </Row>
    </Container>
  );
}
