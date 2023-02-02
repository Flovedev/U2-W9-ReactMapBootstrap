import { Col, Card, Badge } from "react-bootstrap";
import { Component } from "react";
import CommentedArea from "./CommentedArea";

class SingleBook extends Component {
  state = { selected: false, selectedId: "" };

  render() {
    return (
      <Col
        className="mb-2"
        onClick={() =>
          this.setState((prevState) => ({
            selected: !prevState.selected,
          }))
        }
      >
        <Card
          style={{
            width: "18rem",
            border: `${this.state.selected ? "solid" : ""}`,
          }}
          className="bg-dark text-white"
        >
          <Badge bg="secondary">{this.props.id}</Badge>{" "}
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>

            {this.state.selected && (
              <Card.Text>
                <CommentedArea elementId={this.props.id} />
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
