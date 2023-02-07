import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import books from "../Data/fantasy.json";
import CommentedArea from "./CommentedArea";
import SingleBook from "./SingleBook";

const BookList = () => {
  const [datas, setDatas] = useState({
    search: "",
    elementId: "",
    data: "",
  });

  const [selecting, setSelecting] = useState({
    selected: "",
  });

  const changeComment = (newSelected) => {
    setDatas({
      ...datas,
      elementId: newSelected,
    });
  };

  const changeSelected = (event) => {
    setSelecting({
      selected: event,
    });
  };

  return (
    <Container fluid className="bg-secondary py-4 pl-5">
      <Row>
        <Form className="d-flex pb-4">
          <Form.Control
            type="text"
            placeholder="Book search..."
            className="me-2"
            aria-label="Search"
            value={datas.search}
            onChange={(e) => {
              setDatas({
                search: e.target.value,
              });
            }}
          />
        </Form>
      </Row>

      <Row>
        <Col sm={7} className="d-flex flex-wrap">
          {books
            .filter((book) =>
              book.title.toLowerCase().includes(datas.search.toLowerCase())
            )
            .map((filteredBook) => {
              return (
                <SingleBook
                  title={filteredBook.title}
                  img={filteredBook.img}
                  id={filteredBook.asin}
                  key={filteredBook.asin}
                  elementId={filteredBook.asin}
                  changeComment={changeComment}
                  selecting={changeSelected}
                />
              );
            })}
        </Col>

        <Col sm={5} className="align-content-start">
          {datas.elementId !== "" && (
            <CommentedArea data={datas.data} elementId={datas.elementId} />
          )}

          {datas.elementId === "" && (
            <h2 className="text-white">Please select one book</h2>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
