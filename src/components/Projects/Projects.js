import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ezfolio from "../../Assets/Projects/ezfolio.png";
import ats from "../../Assets/Projects/ats.png";
import portf from "../../Assets/Projects/personal-portfolio.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ezfolio}
              isBlog={false}
              title="Ezfolio"
              description="Ezfolio is a user-friendly and versatile portfolio-building platform designed to help individuals create professional and visually appealing online portfolios. It offers a range of customizable templates, intuitive drag-and-drop tools, and integrations with popular services, enabling users to showcase their skills, projects, and achievements effectively."
              ghLink="https://github.com/Sauhard04/EZFOLIO-PORTFOLIO_BUILDER"
              demoLink="https://ezfolio-portfolio-builder.vercel.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ats}
              isBlog={false}
              title="C.W. Scan"
              description="C.W.Scan is a tool designed to evaluate and optimize resumes for compatibility with ATS software used by employers. These systems filter and rank job applications based on specific criteria, ensuring that only the most relevant candidates are considered"
              ghLink="https://github.com/Sauhard04/ATS-Resume-Scanner-and-Grader"
              demoLink="https://ats-resume-scanner-and-grader.vercel.app/home"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portf}
              isBlog={false}
              title="Personal portfolio website"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
