import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { EnvelopeFill, Linkedin, Github } from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="footer">
      <Row>
        <Col xs={12} lg={4} className="footer__col">
          <h2>Socials</h2>
          <div className="footer__icons">
            <a href="https://github.com/sarasorensen/portfolio_front-end_sara">
              {" "}
              <span className="sr-only">Github Logo</span>
              <Github size={30} className="icon" />
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
        <Col xs={12} lg={4} className="footer__col">
          <h2 class="brand-title-footer">Sara Sørensen</h2>
          <p className="pageDes">A creative front-end developer</p>
          <p className="footer__p">For inquiries contact me at:</p>
          <a
            className="link__inline--footer"
            href="mailto:sarasorensen97@hotmail.com"
          >
            sarasorensen97@hotmail.com
          </a>
        </Col>
        <Col xs={12} lg={4} className="footer__col">
          <h2>Links</h2>
          <ul className="footer__menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Resume</NavLink>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
