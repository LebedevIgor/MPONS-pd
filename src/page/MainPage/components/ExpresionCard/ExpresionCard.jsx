import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const CardExpresion = ({ handleCardClick, card, index }) => {
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      className="mb-3"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Card
        border="secondary"
        style={{ width: '25rem' }}
        className="p-3"
        bg="dark"
        text="light"
      >
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Button
            variant="outline-light"
            onClick={() => handleCardClick(index)}
          >
            Подробнее
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardExpresion;
