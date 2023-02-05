import { Jumbotron } from "react-bootstrap";

export default function Welcome({ title }) {
  return (
    <Jumbotron className="mb-0 jumbotron-main">
      <h1>Welcome to {title}</h1>
      <p className="lead">Find the best books ever</p>

      <p>We have all the best books you can find (or not)</p>
    </Jumbotron>
  );
}
