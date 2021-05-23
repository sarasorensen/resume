import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Resume from "./resume/Resume";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

function Layout() {
  return (
    <Router>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <NavLink to="/" exact className="navbar__link order-md-0">
              Home
            </NavLink>
            <NavLink to="/projects" exact className="navbar__link">
              projects
            </NavLink>
            <NavLink to="/resume" exact className="navbar__link">
              Resume
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Switch>
          <ScrollToTop>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/resume" exact component={Resume} />
          </ScrollToTop>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default Layout;
