import { Col, Card } from "react-bootstrap"
import { Component } from "react"

class SingleBook extends Component {

state = {selected: false}

    render() {
    return (
        <Col className="mb-2"
        onClick={() =>
            this.setState(prevState => ({
                selected: !prevState.selected
              }))
        }
        >
            <Card 
            style={{ width: '18rem', border: `${this.state.selected ? "solid" : ""}`}} 
            className="bg-dark text-white">
                <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
    )
}
}

export default SingleBook