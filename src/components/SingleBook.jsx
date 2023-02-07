import { Col, Card } from "react-bootstrap";
import { useState } from "react";
// import CommentedArea from "./CommentedArea";

const SingleBook = ({ changeComment, elementId, img, title, selectedIds }) => {
  // state = { selected: false, selectedId: "" };

  const [selected, setSelected] = useState(false);
  const [selectedId, setSelectedId] = useState({ selectedId: "" });

  return (
    <Col className="mb-2">
      <Card
        style={{
          width: `10rem`,
          border: `${selected ? "solid" : ""}`,
        }}
        className="bg-dark text-white card-main"
        onClick={() => {
          if (selected === false) {
            changeComment(elementId);
            setSelected(true);
          } else {
            changeComment("");
            setSelected(false);
          }
        }}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body className="card-bodies">
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
