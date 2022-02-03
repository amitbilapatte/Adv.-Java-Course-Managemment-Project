import { Accordion, Container, Button } from "reactstrap";

function Home() {
  return (
    <h5
      className="py-5 text-center bg-light align-content-center justify-content-center"
      style={{ height: "350px" }}
    >
      A course management system (CMS) is a collection of software tools
      providing an online environment for course interactions. In addition, a
      CMS is typically integrated with other databases in the university so that
      students enrolled in a particular course are automatically registered in
      the CMS as participants in that course. The decision to use a CMS in a
      traditional face-to-face course has implications for course design that
      often go unnoticed by instructors in their initial use of such systems.
      This module lists technical and pedagogical tips that instructors should
      consider as they place materials into a CMS. While it is intended
      primarily for instructors who are using a CMS for the first time,
      instructors who have already used a CMS in other courses might benefit by
      using these tips as a checklist.
    </h5>
  );
}

export default Home;
