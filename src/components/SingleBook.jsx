import { Col, Card } from "react-bootstrap";
import { Component } from "react";
// import CommentedArea from "./CommentedArea";

class SingleBook extends Component {
  state = { selected: false, selectedId: "" };

  render() {
    return (
      <Col className="mb-2">
        <Card
          style={{
            width: `10rem`,
            border: `${this.state.selected ? "solid" : ""}`,
          }}
          className="bg-dark text-white card-main"
          // onClick={() =>
          //   this.setState((e) => ({
          //     selected: !e.selected,
          //   }))
          // }
          onClick={() => {
            console.log(this.props.selected, this.props.elementId);
            this.props.selected === this.props.elementId &&
              this.setState((e) => ({
                selected: !e.true,
              }));

            this.props.changeComment(this.props.elementId);
          }}
        >
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body className="card-bodies">
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
