import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import img1 from "../../Assets/Projects/img1.png";
import img2 from "../../Assets/Projects/img2.png";
import img3 from "../../Assets/Projects/img3.jpg";
import img4 from "../../Assets/Projects/img4.png";
import img5 from "../../Assets/Projects/img5.png";
import img6 from "../../Assets/Projects/img6.png";
import img7 from "../../Assets/Projects/img7.png";
import img8 from "../../Assets/Projects/img8.png";
import img9 from "../../Assets/Projects/img9.png";
import img10 from "../../Assets/Projects/img10.png";
import img11 from "../../Assets/Projects/img-11.png";
import img12 from "../../Assets/Projects/img12.png";
import img13 from "../../Assets/Projects/img13.png";
import img14 from "../../Assets/Projects/img14.png";
import img15 from "../../Assets/Projects/img15.png";
import img16 from "../../Assets/Projects/img16.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos nos quais trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img16}
              isBlog={false}
              title="Adopet"
              description="Automação desenvolvida com Cypress, com foco em validar o comportamento e a estabilidade da aplicação. Foram criados cenários de teste abrangendo login, cadastro, envio de e-mail e adoção, garantindo o correto funcionamento dos principais fluxos do sistema."
              ghLink="https://github.com/Matheus-sp12/Adopet-automa-o"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img2}
              isBlog={false}
              title="O Bahia Gastrobar"
              description="Este é o meu primeiro projeto freelancer, onde uma empresa de gastronomia me contratou para desenvolver um cardapio completo. nele eu utilizei HTML, CSS e Javascript."
              ghLink="https://github.com/Matheus-sp12/oBahiaGastrobar"
              demoLink="https://o-bahia-gastrobar-6kt4.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img12}
              isBlog={false}
              title="Psicoterapia"
              description="Projero desenvolvido de um site criado para uma psicóloga, fornecer informações sobre seus serviços, incluindo agendamento de sessões, FAQ, depoimentos, e mais. O projeto foi desenvolvido utilizando React e Sass , com várias bibliotecas para funcionalidade adicional."
              ghLink="https://github.com/Matheus-sp12/Psicologa"
              demoLink="https://psicologa-puce.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img8}
              isBlog={false}
              title="Adega-pocao-magica"
              description="Após finalizar meu curso de Javascript, desenvolvi este projeto simulando uma adega, aonde o cliente consegue selecionar as bebidas e adicionar ao carrinho e com horario de funcionamento. Nele  eu utilizei HTML, CSS e Javascript."
              ghLink="https://github.com/Matheus-sp12/Adega-pocao-magica"
              demoLink="https://adega-pocao-magica.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img13}
              isBlog={false}
              title="Easy Visa"
              description="Projero desenvolvido com Typescript, React e Sass, onde fizemos uma plataforma de viagens que mostra todos os serviços, o cliente também consegue escolher o serviço que ele deseja e enviar o pedido para o Whatsapp, incluido tambeém os 7 idiomas mais utilizados no mundo."
              ghLink="https://github.com/Matheus-sp12/-Easy-Visa"
              demoLink="https://easy-visa-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img10}
              isBlog={false}
              title="Silva Barber Shop"
              description="O site Silva Barber Shop é uma plataforma online que oferece serviços de agendamento para uma barbearia. Através dele, os clientes podem visualizar os serviços disponíveis, como cortes de cabelo e aparo de barba, e realizar reservas de forma prática e eficiente. projeto desenvolvido em React."
              ghLink="https://github.com/Matheus-sp12/Silva-Barber-Shop"
              demoLink="https://silva-barber-shop-5avw.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img9}
              isBlog={false}
              title="Spotify"
              description="Este é um projeto full-stack inspirado no Spotify. Com ele, é possível ouvir músicas de artistas específicos e suas mais populares.
Fiz tanto o front-end quanto o back-end, utilizando React, CSS, MongoDB e Express, garantindo uma experiência fluida e dinâmica. "
              ghLink="https://github.com/Matheus-sp12/Spotify"
              demoLink="https://spotify-2-1pk8.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img3}
              isBlog={false}
              title="Hamburgueria"
              description="Projeto criado nas aulas do professor Weverton, onde é uma plataforma de pedidos online para uma hamburgueria, oferecendo um cardápio variado e funcionalidades como carrinho de compras e depoimentos de clientes, aone o cliente pode fazer pedidos online e receber notificações sobre o status do pedido."
              ghLink="https://github.com/Matheus-sp12/Hamburgueria-curso"
              demoLink="https://hamburgueria-curso.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img4}
              isBlog={false}
              title="Air Jordan"
              description="Este foi meu o projeto que me fez escolher a area de desenvolvimento, meu primeiro projeto respónsivo, nele trabalhei com HTML, CSS, onde simulava uma loja de Tenis da Nike."
              ghLink="https://github.com/Matheus-sp12/Air_jordan"
              demoLink="https://air-jordan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img6}
              isBlog={false}
              title="mario-Kart"
              description="Projeto criado para estudar NodeJS, onde simulamos uma corrida do Mario Kart onde usamos logica de programação para simular a corrida."
              ghLink="https://github.com/Matheus-sp12/mario-Kart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img1}
              isBlog={false}
              title="GamesCom"
              description="O site GamesCom é uma plataforma digital dedicada a jogos para PC, consoles e dispositivos móveis. Ele oferece uma ampla variedade de títulos, incluindo lançamentos recentes, pré-vendas e franquias renomadas. Nele utilizei Html e Bootstrap."
              ghLink="https://github.com/Matheus-sp12/GamesCom"
              demoLink="https://games-com-theta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img5}
              isBlog={false}
              title="Pokedex"
              description="A famosa Pokedex, partcipei de uma Bootcamp e desenvolvi essa pokedex utilizando Html, Css e Javascript, nele aprendemos a consumir uma API. o instuito é pesquisar o numero de pokemons de todas as gerações e seus respectivos detalhes."
              ghLink="https://github.com/Matheus-sp12/pokedex"
              demoLink="https://pokedex-beta-smoky.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img7}
              isBlog={false}
              title="House of Dragons"
              description="Projero desenvolvido para estudar HTML, CSS e Javascript, aonde fiz como se fosse a plataforma da HBOMAX, simulando minha serie favorita House of Dragons. Nele  eu utilizei HTML, CSS e Javascript."
              ghLink="https://github.com/Matheus-sp12/House-of-the-Dragons"
              demoLink="https://house-of-the-dragons.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img11}
              isBlog={false}
              title="Sellphone"
              description="Projero desenvolvido utilizando React, Next.js e Tailwind, onde o cliente consegue escolher a capinha dpo celular que ele deseja e enviar o pedido para o Whatsapp da loja e a loja consegue fazer o pedido para o cliente."
              ghLink="https://github.com/Matheus-sp12/CeelPhones"
              demoLink="https://ceel-phones.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img14}
              isBlog={false}
              title="King Blindagem"
              description="Projeto desenvolvido para uma empresa de blindagem, onde foi utilizado React, Sass e Typescript, onde conta um pouco sobre a empresa e mostra os serviços que ela oferece, e o cliente também consegue chamar a empresa pelo Whatsapp e solicitar o serviço."
              ghLink="https://github.com/Matheus-sp12/kingBlindagem"
              demoLink="https://king-blindagem-beta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img15}
              isBlog={false}
              title="PrimeAC"
              description="Projeto desenvolvido para uma empresa de Consultoria especializada, onde foi utilizado React, Sass e Typescript, onde foi desenvolvido umma pagina mostrando como que a empresa funciona e seus serviços, mostramos também as parcerias que a empresa possui."
              ghLink="https://github.com/Matheus-sp12/PrimeACC"
              demoLink="https://github.com/Matheus-sp12/kingBlindagem"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
