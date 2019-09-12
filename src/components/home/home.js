// Importando o React
import React from "react";
import {  Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'
import Experience from '../experience/experience'

import company_avatar from '../../images/company.png';
import company_avatar2 from '../../images/company2.png';


const Home = () => (
  <div>
    <Row>
      <Col m={3} s={12}>
        <UserProfile />
      </Col>
      <Col m={8} s={12}>
        <h5 className="subtitle">Sobre mim</h5>
        <Card>
          <div>
            <p> Olá, eu sou o Leonardo, formado em Ciência da Computação e em busca de uma oportunidade para desenvolvimento!
            <br /> </p>
            <p><b>Formação</b></p>
            <p><b>Ciência da Computação</b></p>
            <p>Universidade Regional Integrado do Alto Uruguai e das Missões Campus Santo Ângelo – Brasil, 2016</p>
            <p>Técnico em Eletrotécnica</p>
            <p>Escola Técnica Estadual Presidente Getúlio Vargas Santo Ângelo, 2011 – 1200 horas </p>  
          </div>
        </Card>
        <h5 className="subtitle">Experiências</h5>

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Javascript Developer"
          company="Soundcloud"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
          avatar={company_avatar}
        />
        <Experience title="React Developer"
          company="Twitter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
          avatar={company_avatar2}
        />

      </Col>
    </Row>



  </div>
);

export default Home;