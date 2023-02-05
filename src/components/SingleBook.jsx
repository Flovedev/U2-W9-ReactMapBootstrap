import { Col, Card, Badge } from "react-bootstrap";
import { Component } from "react";
import CommentedArea from "./CommentedArea";

class SingleBook extends Component {
  state = { selected: false, selectedId: "" };

  render() {
    return (
      <Col className="mb-2">
        <Card
          style={{
            width: "18rem",
            border: `${this.state.selected ? "solid" : ""}`,
          }}
          className="bg-dark text-white"
          onClick={() =>
            this.setState((prevState) => ({
              selected: !prevState.selected,
            }))
          }
        >
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentedArea elementId={this.props.id} />}
      </Col>
    );
  }
}

export default SingleBook;
