import { ListGroup, Button } from "react-bootstrap";
import { setState } from "react";

const url = "https://striveschool-api.herokuapp.com/api/comments/";

const SingleComment = ({ commentId, comment, rate }) => {
  const deleteComment = async () => {
    try {
      let res = await fetch(url + commentId, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmZjAwOWUzYjkwMzAwMTViMDIxMGYiLCJpYXQiOjE2NzU2MjAzNjIsImV4cCI6MTY3NjgyOTk2Mn0.3_KrhUyky1fJuPd-VhuL9frAuhiXZGvrBXzC3Dz4jHE",
        },
      });
      console.log("Deleted!", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ListGroup.Item className="bg-info text-white mb-2">
      <p>Comment: {comment}</p>
      <p>Rate: {rate}</p>
      <Button
        variant="danger"
        onClick={(e) => {
          e.preventDefault();
          deleteComment();
        }}
      >
        Delete Comment
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
