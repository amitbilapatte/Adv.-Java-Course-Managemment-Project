import axios from "axios";
import react, { useState } from "react";
import { toast } from "react-toastify";
import { Fragment } from "react/cjs/react.production.min";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";

const AddCourse = () => {
  const [course, setCourse] = useState({});

  /*
  const [courseData, setCourseData] = useState({
    enteredCourdedId: "",
    enteredTitle: "",
    enteredDescription: "",
  });
  */

  const handleForm = (e) => {
    e.preventDefault();

    let id = e.target.elements.userId.value;
    let title = e.target.elements.title.value;
    let description = e.target.elements.description.value;

    if (!/^[1-9]\d*$/.test(id)) {
      toast.warn("Invalid Course Id ");
      return;
    } else if (title == undefined || title == null || title.length <= 1) {
      toast.warn("Invalid Course Name");
      return;
    } else if (
      description == undefined ||
      description == "" ||
      description == " " ||
      description.length <= 5
    ) {
      toast.warn("Description is too short");
      return;
    }
    console.log(course);
    postData(course);
    e.preventDefault();
    e.target.elements.userId.value = "";
    e.target.elements.title.value = "";
    e.target.elements.description.value = "";
  };

  const postData = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        toast.success(` ${data.title} successfully added.`);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Fragment>
      <Form
        onSubmit={handleForm}
        className="bg-secondary bg-opacity-50 p-3 rounded"
      >
        <h1 className="text-center my-3">Fill Course Details</h1>
        <FormGroup className="text-center my-3">
          <label htmlFor="userId">
            <h4>Course Id</h4>
          </label>
          <Input
            type="text"
            placeholder="Enter your name"
            name="userId"
            id="userId"
            onChange={(e) => {
              //console.log(e.target.value);
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup className="text-center my-3">
          <label htmlFor="title">
            <h4>Course Title</h4>
          </label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup className="text-center my-3">
          <label htmlFor="description">
            <h4>Course Description</h4>
          </label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 100 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
          <Container className="text-center">
            <Button type="reset" color="danger m-2">
              Clear All
            </Button>
            <Button type="submit" color="success">
              Add Course
            </Button>
          </Container>
        </FormGroup>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
