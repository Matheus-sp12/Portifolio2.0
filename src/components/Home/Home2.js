import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/eu.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
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
              Sempre fui apaixonado por tecnologia e desenvolvimento, e foi
              nessa jornada que descobri meu verdadeiro interesse pela qualidade
              de software. Iniciei minha trajetória como estagiário em QA,
              evoluindo até me tornar QA Júnior, com foco em garantir que cada
              produto entregue ofereça excelência, performance e confiabilidade.{" "}
              <br />
              <i>
                <b className="purple">
                  Atualmente atuo com testes manuais e automatizados, possuo
                  conhecimento em:
                </b>{" "}
              </i>
              <br />
              <br />
              Tenho como objetivo{" "}
              <b className="purple">
                {" "}
                garantir a melhor experiência do usuário, identificar erros
                antes que cheguem em produção e contribuir ativamente na
                melhoria contínua dos processos e produtos.&nbsp;
              </b>
              <i></i>
              <br />
              <br />
              Sempre busco aprender novas ferramentas e técnicas de automação,
              pois acredito que um bom QA vai além de testar, ele entende o
              produto, previne falhas e entrega qualidade com propósito.{" "}
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
              Sinta-se à vontade para se{" "}
              <span className="purple">conectar comigo </span>
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
