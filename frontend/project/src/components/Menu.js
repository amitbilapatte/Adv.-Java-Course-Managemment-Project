import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Menu = () => {
  return (
    <ListGroup>
      <Link className="list-group-item list-group-item-action" to="/signup">
        Sign Up
      </Link>
      <Link className="list-group-item list-group-item-action" to="/signin">
        Sign In
      </Link>
      <Link className="list-group-item list-group-item-action" to="/home">
        Home
      </Link>
      <Link className="list-group-item list-group-item-action" to="/add-course">
        Add Courses
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/view-courses"
      >
        View Courses
      </Link>
      <Link className="list-group-item list-group-item-action" to="#">
        About
      </Link>
      <Link className="list-group-item list-group-item-action" to="#">
        Contact
      </Link>
    </ListGroup>
  );
};

export default Menu;
