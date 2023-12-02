import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer py-3 bg-dark text-light">
      <Container>
        <Row className="align-items-center">
          <Col sm={4} className="text-left">
            <span
              style={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                display: 'block',
              }}
            >
              Разработчики:
            </span>
            <Row>
              <Col sm={5}>
                <span style={{ display: 'block' }}>
                  <FaUser style={{ verticalAlign: 'text-bottom' }} />
                  Арсен Григорян
                </span>
                <span style={{ display: 'block' }}>
                  <FaUser style={{ verticalAlign: 'text-bottom' }} />
                  Тим Мухаметов
                </span>
              </Col>
              <Col sm={5}>
                <span style={{ display: 'block' }}>
                  <FaUser style={{ verticalAlign: 'text-bottom' }} />
                  Артур Кригер
                </span>
                <span style={{ display: 'block' }}>
                  <FaUser style={{ verticalAlign: 'text-bottom' }} />
                  Илья Смирнов
                </span>
              </Col>
              <Col sm={5}>
                <span style={{ display: 'block' }}>
                  <FaUser style={{ verticalAlign: 'text-bottom' }} />
                  Игорь Лебедев
                </span>
              </Col>
            </Row>
          </Col>

          <Col sm={5} className="text-center">
            <span>«Моделирование процесса освоения нефтяных скважин»</span>
          </Col>
          <Col sm={3} className="text-center">
            <span>© Все права защищены 2023</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
