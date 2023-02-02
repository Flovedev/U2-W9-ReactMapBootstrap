import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  render() {
    return (
      <>
        <h3 className="text-white">Post comment:</h3>
        <Form.Group controlId="add-comments">
          <Form.Control type="text" placeholder="Enter comment" />
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          <div className="text-center m-2">
            <Button variant="success" type="submit">
              Post
            </Button>
          </div>
        </Form.Group>
      </>
    );
  }
}

export default AddComment;
