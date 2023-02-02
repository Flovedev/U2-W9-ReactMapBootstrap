import { ListGroup, Badge } from "react-bootstrap";

export default function SingleComment({ comment, rate, elementId }) {
  return (
    <ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start bg-dark text-white"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{comment}</div>
          Rate: {rate}
        </div>
        <Badge bg="primary" pill>
          ID: {elementId}
        </Badge>
      </ListGroup.Item>
    </ListGroup.Item>
  );
}
