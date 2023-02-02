import { ListGroup } from "react-bootstrap";

export default function SingleComment({ comment, rate, elementId }) {
  return (
    <ListGroup.Item className="bg-info text-white mb-2">
      <p>Comment:{comment}</p>
      <p>Rate:{rate}</p>
      <p>ID:{elementId}</p>
    </ListGroup.Item>
  );
}
