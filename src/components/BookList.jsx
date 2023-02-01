import { Component } from "react";
import { Container, Row, Form} from "react-bootstrap";
import books from '../Data/fantasy.json'
import SingleBook from "./SingleBook";

class BookList extends Component {

state = {
    bar: {
        search: ''
    }
}

    filterBooklist = () => {
    return this.state.bar.search.includes(books.name)
    }
    
    render() {
    return (
        
        <Container fluid className="bg-secondary py-4 pl-5">
            <Row>
            <Form className="d-flex pb-4">
                <Form.Control
                  type="text"
                  placeholder="Book search..."
                  className="me-2"
                  aria-label="Search"
                  value={this.state.bar.search}
                  onChange={(e) => {
                    
                    this.setState({
                        bar: {
                            search: e.target.value,
                        }
                    })
                  }}
                />
              </Form>
            </Row>

            {this.state.bar.search.length < 3 && (
            <Row xs={1} md={2} lg={3} xl={4}>
                {books.map((book) =>{
                    return (
                        <SingleBook 
                         title = {book.title}
                         img = {book.img}
                         key = {book.asin}
                         disable
                        />
                        )})
                }
            </Row>
            )}

            {this.state.bar.search.length >= 3 && (
            <Row xs={1} md={2} lg={3} xl={4}>
            
            {books.filter(book => book.title.toLowerCase().includes(this.state.bar.search.toLowerCase())).map(filteredBook => {
                return (
                    <SingleBook 
                         title = {filteredBook.title}
                         img = {filteredBook.img}
                         key = {filteredBook.asin}
                         disable
                        />
                )
            }
  )}
            </Row>
            )}

        </Container>
      );
    }
}

export default BookList