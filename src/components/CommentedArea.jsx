import { useState, useEffect } from "react";
import AddComment from "./AddComment";
import CommentedList from "./CommentedList";
import { Spinner, Alert } from "react-bootstrap";

let url = "https://striveschool-api.herokuapp.com/api/comments/";
let options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYjU3YTUwMWZlODAwMTU2MGMyMjEiLCJpYXQiOjE2NzUzNDMyMjYsImV4cCI6MTY3NjU1MjgyNn0.kD8SKBkO7B3HP-huMyKWWJhUSkujtWi4yirP9xz6SSA",
  },
};

const CommentedArea = ({ elementId }) => {
  const [commentArea, setCommentArea] = useState({ bookData: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchComments = async () => {
    try {
      let res = await fetch(url + `${elementId}`, options);
      let data = await res.json();
      if (res.ok) {
        // console.log(data);
        setCommentArea({
          bookData: data,
        });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementId]);

  return (
    <div className="bg-dark border border-color-white p-3">
      <AddComment data={elementId} />

      {isLoading && <Spinner animation="border" variant="success" />}

      {isError && <Alert variant="danger">We got an error!</Alert>}

      <CommentedList data={commentArea.bookData} />
    </div>
  );
};

export default CommentedArea;
