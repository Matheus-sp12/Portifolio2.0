import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá pessoal, eu sou o<span className="purple"> Vinicius Silva </span>
            e Moro em<span className="purple"> São Paulo, Brasil.</span>
            <br />
            Atualmente, trabalho como Quality Assurance (QA).
            <br />
            Sou formado em Ciência da Computação pela Uninove e estou concluindo minha especialização em Qualidade de Software pela DIO.
            <br />
            <br />
            Além de codificação, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar video game.
            </li>
            <li className="about-activity">
              <ImPointRight /> Ir para a Academia
            </li>
            <li className="about-activity">
              <ImPointRight /> VIajar.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A tecnologia move o mundo"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
