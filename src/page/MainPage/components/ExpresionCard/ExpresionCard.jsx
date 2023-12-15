import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './style.css';

const CardExpresion = ({ handleCardClick, card, index }) => {
  let truncatedText = card.text;
  const maxLength = 90;

  if (card.text.length > maxLength) {
    const lastSpaceIndex = card.text.lastIndexOf(' ', maxLength);
    truncatedText =
      lastSpaceIndex > 0
        ? `${card.text.substring(0, lastSpaceIndex)}...`
        : card.text.substring(0, maxLength);
  }

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
        className="p-3 card"
        bg="dark"
        text="light"
      >
        <Card.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '30px',
          }}
        >
          <Card.Title style={{ textAlign: 'center' }}>{card.title}</Card.Title>
          <Card.Text>{truncatedText}</Card.Text>
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
