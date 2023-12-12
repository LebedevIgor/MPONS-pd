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
      title: '1.	Закон сохранения массы для воды в стационарном случае',
      text: 'Используется для моделирования и анализа процессов движения воды в геологических образованиях, обеспечивая понимание и оптимизацию добычи водных и нефтяных ресурсов.',
      cardInfo: {
        formula: 'F*rho*S+nablaRhoQ',
        mathExpression: String.raw`Q_{\omega} \cdot \Delta t = \phi \cdot \rho_{\omega} \cdot S_{\omega} + \nabla \cdot (\rho_{\omega} \cdot q_{\omega})`,
        variables: [
          {
            name: 'Qt',
            string: String.raw`Q_{\omega} \cdot \Delta t`,
            value: 0,
            description: 'Объёмный расход воды на сток * временной шаг',
            calculable: true,
          },
          {
            name: 'F',
            string: String.raw`{\phi }`,
            value: 0,
            description: 'Пористость воды',
            calculable: false,
          },
          {
            name: 'rho',
            string: String.raw`\rho_{\omega}`,
            value: 0,
            description: 'Плотность воды',
            calculable: false,
          },
          {
            name: 'S',
            string: String.raw`S_{\omega}`,
            value: 0,
            description: 'Насыщенность воды',
            calculable: false,
          },

          {
            name: 'nablaRhoQ',
            string: String.raw`{\nabla \cdot (\rho_{\omega} \cdot q_{\omega})}`,
            value: 0,
            description: 'Дивергенция потока воды через пористую среду',
            calculable: false,
          },
        ],
      },
    },
    {
      title: '2.	Закон Дюпюи для нефти',
      text: 'Используется для моделирования движения нефти в пористой среде и изменения её объема под воздействием изменения давления. Уравнение Дюпюи учитывает сжимаемость нефти и связано с изменением объемного коэффициента нефти в зависимости от изменения давления, что важно при анализе и оптимизации процессов добычи нефти.',
      cardInfo: {
        formula: '(1/B0) + (B*(DeltaP0-DeltaPoi)/B0)',
        mathExpression: String.raw`\frac{1}{B_{oi}} = \frac{1}{B_o} + \frac{\beta_o (\Delta P_o - \Delta P_{oi})}{B_o}`,
        variables: [
          {
            name: '1B',
            string: String.raw`\frac{1}{B_{oi}}`,
            value: 0,
            description: '1 / Начальный объемный коэффициент нефти',
            calculable: true,
          },
          {
            name: 'B0',
            string: String.raw`B_{0}`,
            value: 0,
            description: 'Текущий объемный коэффициент нефти',
            calculable: false,
          },
          {
            name: 'B',
            string: String.raw`{\beta_o }`,
            value: 0,
            description: 'Сжимаемость нефти',
            calculable: false,
          },
          {
            name: 'DeltaP0',
            string: String.raw`\Delta P_o `,
            value: 0,
            description: 'Изменение давления нефти',
            calculable: false,
          },
          {
            name: 'DeltaPoi',
            string: String.raw`\Delta P_{oi}`,
            value: 0,
            description: 'Начальное изменение давления нефти',
            calculable: false,
          },
        ],
      },
    },
    {
      title: '3.	Закон Фика для переноса массы',
      text: 'Описывает распределение массового потока нефтяных компонент в пористой среде, что важно при анализе диффузии и переноса массы.',
      cardInfo: {
        formula: '-1 * D * (c2-c1/x2-x1)',
        mathExpression: String.raw`q = -D \frac{C_2 - C_1}{x_2 - x_1}`,
        variables: [
          {
            name: 'q',
            string: String.raw`q`,
            value: 0,
            description:
              'Массовый поток вещества (например, нефти) через пористую среду',
            calculable: true,
          },
          {
            name: 'D',
            string: String.raw`D`,
            value: 0,
            description: 'Коэффициент диффузии',
            calculable: false,
          },
          {
            name: 'c1',
            string: String.raw`{C_1}`,
            value: 0,
            description: 'Концентрации вещества',
            calculable: false,
          },
          {
            name: 'c2',
            string: String.raw`{C_2}`,
            value: 0,
            description: 'Концентрации вещества',
            calculable: false,
          },
          {
            name: 'x1',
            string: String.raw`{x_1}`,
            value: 0,
            description: 'Координаты 1 точки',
            calculable: false,
          },
          {
            name: 'x2',
            string: String.raw`{x_2}`,
            value: 0,
            description: 'Координаты 2 точки',
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
