import { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import books from "../Data/fantasy.json";
import CommentedArea from "./CommentedArea";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    bar: {
      search: "",
    },
    elementId: "",
    data: "",
  };

  changeComment = (newSelected) => {
    this.setState({
      elementId: newSelected,
    });
  };

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
                  },
                });
              }}
            />
          </Form>
        </Row>

        <Row>
          <Col sm={7} className="d-flex flex-wrap">
            {books
              .filter((book) =>
                book.title
                  .toLowerCase()
                  .includes(this.state.bar.search.toLowerCase())
              )
              .map((filteredBook) => {
                return (
                  <SingleBook
                    title={filteredBook.title}
                    img={filteredBook.img}
                    id={filteredBook.asin}
                    key={filteredBook.asin}
                    elementId={filteredBook.asin}
                    changeComment={this.changeComment}
                    selected={this.state.elementId}
                  />
                );
              })}
          </Col>

          <Col sm={5} className="align-content-start">
            {this.state.elementId !== "" && (
              <CommentedArea
                data={this.state.data}
                elementId={this.state.elementId}
              />
            )}

            {this.state.elementId === "" && (
              <h2 className="text-white">Please select one book</h2>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
