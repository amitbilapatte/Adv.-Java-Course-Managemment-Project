import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import base_url from "../api/bootapi";

const Course = ({ course, update }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/deleteCourse/${id}`).then(
      (response) => {
        toast.success("Course deleted");
        update(id);
      },
      (error) => {
        toast.error("Can't delete now!! Server problem..");
      }
    );
  };
  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
