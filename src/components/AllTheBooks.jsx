import { Card, Container, Row, Col } from "react-bootstrap";
import books from '../Data/fantasy.json'

export default function AllTheBooks() {
    console.log(books)
    return (
        <Container fluid className="bg-secondary py-4">
            <Row xs={1} md={2} lg={4} >
                {books.map((book) =>{
                return (
                <Col className="mb-2">
                    <Card style={{ width: '18rem'}} className="bg-dark text-white">
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                )
                } 
                )}
            </Row>
        </Container>
      );
}