import "./App.css";
import { Col, Container, Row } from "reactstrap";
import Home from "./components/Home";
import Allcourse from "./components/Allcourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import { ToastContainer } from "react-toastify";
import Registration from "./components/Registration";

function Test() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <ToastContainer />
          <Header />
          <Row>
            <Col md={3}>
              <Menu />
            </Col>
            <Col md={9}>
              <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Registration />} />
              </Routes>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<Allcourse />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default Test;
