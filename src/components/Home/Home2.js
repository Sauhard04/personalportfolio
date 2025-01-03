import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pp.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am passionate about programming and continuously expanding my expertise in the field. Over time, I have developed proficiency in programming languages<br/> such as C, Python, Java, and JavaScript.
            <h1 style={{ fontSize: "2.0em" ,paddingTop: "1em"}}>
            💡 Key Interests:
            </h1>
<br/>
🌐 Exploring and developing <b className="purple">cutting-edge web technologies</b> and <b className="purple">innovative products</b>.<br/>

🛠️ Building <b className="purple">robust and scalable applications</b> with modern technologies.<br/>

🚀 Leveraging <b className="purple">Node.js</b> for back-end development and creating seamless <b className="purple">APIs</b>.<br/>

⚛️ Expertise in modern <b className="purple">JavaScript libraries</b> and frameworks, including <b className="purple">React.js and Next.js</b>, to deliver highly interactive and efficient <b className="purple">user experiences</b>.

              <br />
              🌐My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>
              </i>
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-circle"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sauhard04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sauhardkaushik/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sauhard.py/profilecard/?igsh=MTF6cWNtZ2MwdHF0eA=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
