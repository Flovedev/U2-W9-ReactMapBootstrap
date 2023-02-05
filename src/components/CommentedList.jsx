import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

export default function CommentedList({ data }) {
  return (
    <ListGroup>
      {data.map((res) => {
        // console.log(res);
        return (
          <SingleComment
            comment={res.comment}
            rate={res.rate}
            key={res._id}
            commentId={res._id}
          />
        );
      })}
    </ListGroup>
  );
}
