import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const url = "https://striveschool-api.herokuapp.com/api/comments/";

const AddComment = ({ data }) => {
  const [commentUse, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: "",
  });

  const sendComment = async () => {
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(commentUse),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmZjAwOWUzYjkwMzAwMTViMDIxMGYiLCJpYXQiOjE2NzU2MjAzNjIsImV4cCI6MTY3NjgyOTk2Mn0.3_KrhUyky1fJuPd-VhuL9frAuhiXZGvrBXzC3Dz4jHE",
          "Content-Type": "application/json",
        },
      });
      console.log("Commented!", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          sendComment();
        }}
      >
        <Form.Group controlId="add-comments">
          <p className="m-0 text-white">Comment:</p>
          <Form.Control
            type="text"
            placeholder="Type your comment..."
            onChange={(e) => {
              setComment({
                ...commentUse,
                comment: e.target.value,
              });
            }}
          />
          <p className="m-0 text-white">Rate:</p>
          <Form.Control
            as="select"
            value={commentUse.rate}
            onChange={(e) => {
              setComment({
                ...commentUse,
                rate: e.target.value,
              });
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          <div className="text-center m-2">
            <Button
              variant="success"
              type="submit"
              onClick={() => {
                setComment({
                  ...commentUse,
                  elementId: data,
                });
              }}
            >
              Post Comment
            </Button>
          </div>
        </Form.Group>
      </Form>
    </>
  );
};

export default AddComment;
