import { ListGroup } from "react-bootstrap";

export default function CommentedList({ booksList }) {
  return (
    <ListGroup as="ol" numbered>
      {booksList}
    </ListGroup>
  );
}
