import "./App.css";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Registration from "./components/Registration";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Test from "./Test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
