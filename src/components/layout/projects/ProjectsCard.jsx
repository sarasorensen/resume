import { Row, Col, Card } from "react-bootstrap";

const projects = [
  {
    name: "Holidaze",
    link: "https://sara-sorensen-holidaze.netlify.app/",
    img: require("../../../images/react.png"),
    about: "My last exam creating a hotel booking page with admin.",
    alt: "A website",
    id: "react",
  },
  {
    name: "GameBoard",
    link:
      "http://sarasorensen.com/2020-09-13-semesterproject2-saras%C3%B8rensen%20-kopi/index.html",
    img: require("../../../images/got.png"),
    about: "My second exam creating a board game for big desktops.",
    alt: "A website",
    id: "got",
  },
  {
    name: "Space",
    link: "http://sarasorensen.com/examFebruary/index.html",
    img: require("../../../images/space.png"),
    about: "My first exam for a space event webpage.",
    alt: "A website",
    id: "space",
  },
  {
    name: "ReCycle",
    link: "http://sarasorensen.com/re-cycle/html-css/re-index.html",
    img: require("../../../images/recycle.png"),
    about: "My first ever webpage.",
    alt: "A website",
    id: "recycle",
  },
  {
    name: "Yoga",
    link: "http://sarasorensen.com/yoga/index.html",
    img: require("../../../images/yoga.png"),
    about: "A webpage functioning as a yoga/ travelling diary.",
    alt: "A website",
    id: "yoga",
  },
];

const ProjectsCardItem = (props) => {
  return (
    <Col xs={12} md={6} lg={4} className="project">
      <Card className="project__card">
        <Card.Img
          className="project__img"
          src={props.project.img.default}
          alt={props.project.alt}
        />
        <Card.Body>
          <Card.Title className="project__title">
            {props.project.name}
          </Card.Title>{" "}
          <div className="textbox">
            <Card.Text>
              <p className="project__about"> {props.project.about}</p>
            </Card.Text>
          </div>
          <a
            href={props.project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn__project btn "
          >
            View Page
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

function ProjectsCard() {
  return (
    <Row>
      {projects.map((project) => {
        return <ProjectsCardItem project={project} key={project.id} />;
      })}
    </Row>
  );
}

export default ProjectsCard;
