import React from "react";
import Heading from "../Heading";
import { Container, Row, Col } from "react-bootstrap";

function Resume() {
  <Heading title="Resume" />;

  return (
    <Container>
      <Col>
        <h2>Resume</h2>
        <p className="pageDes">
          See a simple overview of my resume including skills, education,
          certificates and courses
        </p>
      </Col>
      <Row>
        <Col>
          <h3>skills</h3>
          <ul className="list">
            <li>Web and coding</li>
            <li>UX Design</li>
            <li>Graphic Design</li>
            <li>Hobby Photography</li>
          </ul>
        </Col>

        <Col>
          <h3>education</h3>
          <ul className="list">
            <li>
              <span className="bold">Mar 2019 - Mar 2021</span>
            </li>
            <li>Front-end Development</li>
            <li>
              <span className="bold">Aug 2013 - June 2016</span>
            </li>
            <li>Media & Communication</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Certificates</h3>
          <ul className="list">
            <li>
              <a
                className="link"
                href="https://www.freecodecamp.org/certification/sarasorensen/responsive-web-design"
              >
                Responsive Web Design
              </a>
            </li>
            <li>
              <p
                className="link"
                href="https://www.freecodecamp.org/certification/sarasorensen/javascript-algorithms-and-data-structures"
              >
                Javascript Algorithms and Data Structures
              </p>
            </li>
          </ul>
        </Col>

        <Col>
          <h3>Courses</h3>
          <ul className="list">
            <li>Education First English Course</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
