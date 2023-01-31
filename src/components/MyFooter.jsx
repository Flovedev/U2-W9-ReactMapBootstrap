import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MyFooter({name}) {
    return (
      <Container fluid className='fixed-bottom bg-dark text-white'>
        <Row>
          <Col>2023 - {name}</Col>
          <Col className='bg-light text-dark'>Contanct Us</Col>
          <Col>Mix icons</Col>
        </Row>
      </Container>
    );
  }