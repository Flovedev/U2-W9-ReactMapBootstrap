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
    elementId: "0316438960",
    data: "",
    selected: false,
  };

  changeComment = (newSelected) => {
    this.setState({
      elementId: newSelected,
    });
  };

  changeData = (newData) => {
    this.setState({
      data: newData,
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

        {this.state.bar.search.length < 3 && (
          <Row>
            <Col sm={7} className="d-flex flex-wrap">
              {books.map((book) => {
                return (
                  <SingleBook
                    title={book.title}
                    img={book.img}
                    id={book.asin}
                    key={book.asin}
                    elementId={book.asin}
                    changeComment={this.changeComment}
                    selected={this.state.selected}
                    disable
                  />
                );
              })}
            </Col>
            <Col sm={5} className="align-content-start">
              <CommentedArea
                data={this.state.data}
                elementId={this.state.elementId}
                changeData={this.changeData}
              />
            </Col>
          </Row>
        )}

        {this.state.bar.search.length >= 3 && (
          <Row xs={1} md={2} lg={3} xl={4}>
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
                    disable
                  />
                );
              })}
          </Row>
        )}
      </Container>
    );
  }
}

export default BookList;
