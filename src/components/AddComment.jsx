import { Component } from "react";
import { Form, Button } from "react-bootstrap";

const url = "https://striveschool-api.herokuapp.com/api/comments/";

class AddComment extends Component {
  state = {
    newComment: {
      comment: "",
      rate: 1,
      elementId: this.props.data,
    },
  };

  sendComment = async () => {
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(this.state.newComment),
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

  render() {
    return (
      <>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            this.sendComment();
          }}
        >
          <Form.Group controlId="add-comments">
            <p className="m-0 text-white">Comment:</p>
            <Form.Control
              type="text"
              placeholder="Type your comment..."
              onChange={(e) => {
                this.setState({
                  newComment: {
                    ...this.state.newComment,
                    comment: e.target.value,
                  },
                });
              }}
            />
            <p className="m-0 text-white">Rate:</p>
            <Form.Control
              as="select"
              value={this.state.newComment.rate}
              onChange={(e) => {
                this.setState({
                  newComment: {
                    ...this.state.newComment,
                    rate: e.target.value,
                  },
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
              <Button variant="success" type="submit">
                Post Comment
              </Button>
            </div>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default AddComment;
