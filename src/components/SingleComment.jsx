import { ListGroup, Button } from "react-bootstrap";
import { Component } from "react";

const url = "https://striveschool-api.herokuapp.com/api/comments/";

class SingleComment extends Component {
  deleteComment = async () => {
    try {
      let res = await fetch(url + this.props.commentId, {
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

  render() {
    return (
      <ListGroup.Item className="bg-info text-white mb-2">
        <p>Comment: {this.props.comment}</p>
        <p>Rate: {this.props.rate}</p>
        <Button
          variant="danger"
          onClick={(e) => {
            e.preventDefault();
            this.deleteComment();
          }}
        >
          Delete Comment
        </Button>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
