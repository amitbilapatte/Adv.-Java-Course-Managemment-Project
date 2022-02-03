import axios from "axios";
import { react, useEffect, useState } from "react";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";
import Course from "./Cource";

const Allcourse = () => {
  const getAllCourses = () => {
    axios.get(`${base_url}/cources`).then(
      (response) => {
        toast.success("Courses has been loaded");
        console.log(response.data);
        setCourse(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Can't reach server now");
      }
    );
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  const [course, setCourse] = useState([]);

  const updateCourseById = (id) => {
    setCourse(course.filter((c) => c.id != id));
  };

  return (
    <div className="text-center">
      <h1>All Courses</h1>
      <p>List of all courses are as follows</p>
      {course.length > 0
        ? course.map((item) => (
            <Course key={item.id} course={item} update={updateCourseById} />
          ))
        : "No Courses"}
    </div>
  );
};

export default Allcourse;
