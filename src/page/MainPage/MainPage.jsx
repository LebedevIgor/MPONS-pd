import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ExpresionCard from './components/ExpresionCard/ExpresionCard';

const MainPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    navigate(`/${index}`, { state: cardsData[index] });
  };
  const cardsData = [
    {
      title: 'Уравнение переноса массы для воды в пористой среде',
      text: 'Уравнение описывает, как изменяется насыщенность воды в пористой среде со временем, учитывая два основных вклада в изменение насыщенности воды: временную изменчивость и пространственное распределение.',
      cardInfo: {
        formula: 'F*(d*(rho*S/d*t))+nabla*(rho*u*S)',
        mathExpression: String.raw`R_{\omega i} = \phi\frac{\partial(\rho_{\omega i} S_{\omega i})}{\partial t} + \nabla \cdot (\rho_{\omega i} u_{\omega i} S_{\omega i})`,
        variables: [
          {
            name: 'R',
            string: String.raw`R_{\omega i}`,
            value: 0,
            description: 'Изменение насыщенности воды',
            calculable: true,
          },
          {
            name: 'd',
            string: String.raw`{\partial }`,
            value: 0,
            description: 'Частная переменная',
            calculable: false,
          },
          {
            name: 'F',
            string: String.raw`{\phi }`,
            value: 0,
            description: 'Угол поворота',
            calculable: false,
          },
          {
            name: 'rho',
            string: String.raw`\rho_{\omega i}`,
            value: 0,
            description: 'Плотность воды в пористой среде',
            calculable: false,
          },
          {
            name: 'S',
            string: String.raw`S_{\omega i}`,
            value: 0,
            description: 'Насыщенность воды в пористой среде',
            calculable: false,
          },
          {
            name: 't',
            string: 't',
            value: 0,
            description: 'Время',
            calculable: false,
          },
          {
            name: 'nabla',
            string: `\\nabla`,
            value: 0,
            description: 'Векторный дифференциальный оператор',
            calculable: false,
          },
          {
            name: 'u',
            string: String.raw`u_{\omega i}`,
            value: 0,
            description: ' Скорость фильтрации',
            calculable: false,
          },
        ],
      },
    },
  ];

  return (
    <Container fluid>
      <Row className="justify-content-center mt-4 mb-4">
        <Col xs={12} className="text-center mb-4">
          <h1 className="text-light">Процессы освоения нефтяных скважин</h1>
        </Col>
        <Row className="justify-content-center mt-4 mb-4">
          {cardsData.map((card, index) => (
            <ExpresionCard
              key={index}
              handleCardClick={handleCardClick}
              card={card}
              index={index}
            />
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default MainPage;
