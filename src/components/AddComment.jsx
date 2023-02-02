import { Component } from "react";
import { Form } from "react-bootstrap";

class AddComment extends Component {
  render() {
    return (
      <>
        <h3>Post comment:</h3>
        <Form.Group controlId="add-comments">
          <Form.Control type="text" placeholder="Enter comment" />
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          <Form.Control type="text" placeholder="Enter comment" />
        </Form.Group>
      </>
    );
  }
}

export default AddComment;
