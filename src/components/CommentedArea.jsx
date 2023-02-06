import { Component } from "react";
import AddComment from "./AddComment";
import CommentedList from "./CommentedList";
import { Spinner, Alert } from "react-bootstrap";

let url = "https://striveschool-api.herokuapp.com/api/comments/";
let options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYjU3YTUwMWZlODAwMTU2MGMyMjEiLCJpYXQiOjE2NzUzNDMyMjYsImV4cCI6MTY3NjU1MjgyNn0.kD8SKBkO7B3HP-huMyKWWJhUSkujtWi4yirP9xz6SSA",
  },
};

class CommentedArea extends Component {
  state = {
    bookData: [],
    elementId: "",
    isLoading: true,
    isError: false,
  };

  fetchComments = async () => {
    try {
      let res = await fetch(url + `${this.props.elementId}`, options);
      let data = await res.json();
      if (res.ok) {
        // console.log(data);
        this.setState({
          bookData: data,
          isLoading: false,
        });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);

      this.setState({ isLoading: false, isError: true });
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.elementId !== this.props.elementId) this.fetchComments();
  };

  render() {
    return (
      <div className="bg-dark border border-color-white p-3">
        <AddComment data={this.props.elementId} />

        {this.state.isLoading && (
          <Spinner animation="border" variant="success" />
        )}

        {this.state.isError && <Alert variant="danger">We got an error!</Alert>}

        <CommentedList data={this.state.bookData} />
      </div>
    );
  }
}

export default CommentedArea;
