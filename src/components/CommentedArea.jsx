import { Component } from "react";
import AddComment from "./AddComment";
import CommentedList from "./CommentedList";
import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";

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
  };

  fetchComments = async () => {
    try {
      let res = await fetch(url + `${this.props.elementId}`, options);
      let data = await res.json();
      if (res.ok) {
        // console.log(data);
        this.setState({
          bookData: data,
        });
      } else {
        console.log("not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return this.state.bookData.map((res) => {
      // console.log(this.state.bookData);
      return (
        // <CommentedList
        //   bookList={
        //     <SingleComment
        //       comment={res.comment}
        //       rate={res.rate}
        //       elementId={res._id}
        //       key={res._id}
        //     />
        //   }
        // />

        <SingleComment
          comment={res.comment}
          rate={res.rate}
          elementId={res._id}
          key={res._id}
        />
      );
    });
  }
}

export default CommentedArea;
