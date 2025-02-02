import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/eu.jpg";
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
              Deixe me <span className="purple"> Apresentar </span>
            </h1>
            <p className="home-about-body">
            Escolhi essa area pois sempref fui apaixonado por jogos e entrei na intenção de criar jogos mas acabei me apaixonando por desenvolvimento de software.
              <br />
              <br />Minha especialidade é no desenvolvimento Front-end, com foco em 
              <i>
                <b className="purple"> Paginas responsivas, de alto desempenho e aplicativos modernos. </b>
              </i>
              <br />
              <br />
              Tenho interesse em <b className="purple"> desenvolver novas tecnologias,  criar produtos para a web e aplicativos inovadores&nbsp;</b>
              <i>
              </i>
              <br />
              <br />
              Sempre que possível, também aplico minha paixão por desenvolver produtos com <b className="purple">Node.js e bibliotecas e frameworks Javascript </b> modernos como <b className="purple"> React.js e Next.js.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Encontre-me em</h1>
            <p>
            Sinta-se à vontade para se <span className="purple">conectar comigo </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Matheus-sp12"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/vinícius-silva-450b771a0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vinicius_math15/"
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
