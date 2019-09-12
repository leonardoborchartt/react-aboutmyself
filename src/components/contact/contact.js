
import React from "react";

import { Modal, Row, Col, Card, Input, Button } from 'react-materialize';

import UserProfile from '../user_profile/user_profile'

const trigger = <Button>Enviar</Button>;

const Contact = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
      <h5>Contato</h5>
      <Card>
        <Row>

          <Input placeholder="seuemail@dominio.com" type="email" label="Email" s={12} />
          <Input placeholder=".." label="Message" s={12} />
          <Col s={12} m={12}>

            <Modal trigger={trigger}>
              <h5>Obrigado pelo envio !</h5>
            </Modal>

          </Col>
        </Row>
      </Card>
    </Col>

  </Row>

);
export default Contact;



