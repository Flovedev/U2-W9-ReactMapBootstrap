import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
import { useEffect, useState } from "react";

export default function CommentedList({ data, render }) {
  const [rendering, setRendering] = useState({
    letsRender: [],
  });

  const renderAgain = (event) => {
    setRendering({
      letsRender: event,
    });
  };

  useEffect(() => {
    render(rendering.letsRender);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rendering]);

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
            renderAgain={renderAgain}
          />
        );
      })}
    </ListGroup>
  );
}
