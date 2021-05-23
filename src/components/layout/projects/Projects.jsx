import React from "react";
import Heading from "../Heading";
import ProjectsCard from "./ProjectsCard";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  <Heading title="Projects" />;

  return (
    <Container>
      <Row>
        <Col>
          <h2>My Projects</h2>
          <p className="pageDes">
            Here you can view some of my previous projects from exams and
            modules, from most recent to oldest
          </p>
        </Col>
        <ProjectsCard />
      </Row>
    </Container>
  );
}

export default Projects;
