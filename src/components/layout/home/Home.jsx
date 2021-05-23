import React from "react";
import Heading from "../Heading";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { EnvelopeFill, Github, Linkedin } from "react-bootstrap-icons";
import Avatar from "../../../images/avatar.png";

function Home() {
  <Heading title="Home" />;

  return (
    <Container>
      <Row className="header">
        <Col xs={12} sm={9} lg={6}>
          <article>
            <h1>Sara Sørensen</h1>
            <h2>Front-end developer</h2>
            <p className="pageDes">
              Studying the technology where visual design meets coding
            </p>
            <Col xs={12} sm={4} lg={4} className="col--buttons">
              <NavLink to="/resume" className="btn">
                Resume
              </NavLink>

              <NavLink to="/projects" className="btn btn--second">
                Projects
              </NavLink>
            </Col>
          </article>
        </Col>
        <Col xs={12} sm={3} lg={4} className="avatar__col">
          <img src={Avatar} className="avatar" alt="Avatar Logo" />
        </Col>
      </Row>
      <Row>
        <Col className="aboutContent">
          <a className="link__inline" href="mailto:sarasorensen97@hotmail.com">
            Contact me - write me an email now
          </a>

          <p>
            I recently graduated as a Front-end Developer, from Noroff School of
            technology and digital media resulting in a higher professional
            degree.
          </p>

          <p>
            I'm a trained frontend developer with the knowledge, skills and
            expertise needed to develop and produce user-oriented solutions and
            services for web and mobile devices.
          </p>
          <div className="home__icons">
            <a href="ttps://github.com/sarasorensen/portfolio_front-end_sara">
              {" "}
              <span className="sr-only">Github Logo</span>
              <Github size={30} />
            </a>
            <a href="mailto:sarasorensen97@hotmail.com">
              {" "}
              <span className="sr-only">Mail Logo</span>
              <EnvelopeFill size={30} className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/sara-s%C3%B8rensen-7b0711179">
              {" "}
              <span className="sr-only">LinkedIn Logo</span>
              <Linkedin size={30} className="icon" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
