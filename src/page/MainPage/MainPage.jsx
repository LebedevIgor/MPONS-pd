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
    {
      title: '4.	Уравнение сохранения энергии для нефти',
      text: 'Используется для моделирования изменения температуры нефти в месторождении, что влияет на её вязкость и другие физические свойства.',
      cardInfo: {
        formula: 'k * dT + H',
        mathExpression: String.raw`\rho_0 C_0 \Delta T_0 = k_0 \Delta T_0 + H_0`,
        variables: [
          {
            name: 'rho',
            string: String.raw`\rho_0`,
            value: 0,
            description: 'Плотность нефти',
            calculable: true,
          },
          {
            name: 'С',
            string: String.raw`C_0`,
            value: 0,
            description: 'Удельная теплоемкость нефти',
            calculable: true,
          },
          {
            name: 'dT',
            string: String.raw`\Delta T_0`,
            value: 0,
            description: 'Изменение температуры нефти',
            calculable: false,
          },
          {
            name: 'k',
            string: String.raw`k_0`,
            value: 0,
            description: 'Теплопроводность нефти',
            calculable: false,
          },
          {
            name: 'H',
            string: String.raw`H_0`,
            value: 0,
            description: 'Источник или сток тепла в нефти',
            calculable: false,
          },
        ],
      },
    },
    {
      title: '5.	Формула Роса для оценки обводненности',
      text: 'Позволяет оценить долю воды в потоке нефти, что важно для контроля и оптимизации процессов добычи.',
      cardInfo: {
        formula: '(C0 - Ci) / ((C0 - Ci) + (1 - S) * Ci)',
        mathExpression: String.raw`W_i = \\frac{{Cω_0 - Cω_i}}{{(Cω_0 - Cω_i) + (1 - S_{i0})Cω_i}}`,
        variables: [
          {
            name: 'W',
            string: String.raw`W_i`,
            value: 0,
            description: 'Обводненность, доля воды в потоке нефти',
            calculable: true,
          },
          {
            name: 'С0',
            string: String.raw`Cω_0`,
            value: 0,
            description: 'Концентрация воды в начальной стадии',
            calculable: false,
          },
          {
            name: 'Ci',
            string: String.raw`{Cω_i}`,
            value: 0,
            description: 'Концентрация воды в текущей стадии',
            calculable: false,
          },
          {
            name: 'S',
            string: String.raw`S_{i0}`,
            value: 0,
            description: 'Начальная насыщенность нефти водой',
            calculable: false,
          },
        ],
      },
    },
    {
      title: '6.	Уравнение Дюпюи для вязкости нефти',
      text: 'Позволяет оценить изменение вязкости нефти в зависимости от давления, что критически важно для оценки и контроля эффективности добычи и оптимизации транспортировки нефтяных флюидов',
      cardInfo: {
        formula: 'ui * (1 + a * (P - P0))',
        mathExpression: String.raw`μ₀ = μᵢ₀ * (1 + α * (P - Pᵢ₀))`,
        variables: [
          {
            name: 'u0',
            string: String.raw`μ₀`,
            value: 0,
            description: 'Вязкость нефти',
            calculable: true,
          },
          {
            name: 'ui',
            string: String.raw`μᵢ₀`,
            value: 0,
            description: 'Коэффициент диффузии',
            calculable: false,
          },
          {
            name: 'a',
            string: String.raw`α`,
            value: 0,
            description: 'Коэффициент изменения вязкости с изменением давления',
            calculable: false,
          },
          {
            name: 'P',
            string: String.raw`P`,
            value: 0,
            description: 'Текущее давление',
            calculable: false,
          },
          {
            name: 'P0',
            string: String.raw`Pᵢ₀`,
            value: 0,
            description: 'Начальное давление',
            calculable: false,
          },
        ],
      },
    },
    {
      title: '7.	Формула для расчёта фактической продуктивности месторождения',
      text: 'Позволяет оценить объем нефти, который может быть произведен из месторождения, учитывая различные факторы, такие как проницаемость породы, вязкость флюида и характеристики скважин, что является ключевым параметром для планирования и оптимизации процессов добычи.',
      cardInfo: {
        formula: 'k*h / ub * 2 * Pi / (ln(Rk/rc) + S)',
        mathExpression: String.raw`N = \\frac{k \\cdot h}{\\mu_b} \\cdot \\frac{2 \\pi}{\\ln(\\frac{R_k}{r_c}) + S}`,
        variables: [
          {
            name: 'N',
            string: String.raw`N`,
            value: 0,
            description: 'Фактическая продуктивность месторождения',
            calculable: true,
          },
          {
            name: 'k',
            string: String.raw`k`,
            value: 0,
            description: 'Проницаемость породы',
            calculable: false,
          },
          {
            name: 'h',
            string: String.raw`h`,
            value: 0,
            description: 'Концентрации вещества',
            calculable: false,
          },
          {
            name: 'ub',
            string: String.raw`mu_b`,
            value: 0,
            description: 'Вязкость флюида',
            calculable: false,
          },
          {
            name: 'Rk',
            string: String.raw`R_k`,
            value: 0,
            description: 'Радиус дренирования',
            calculable: false,
          },
          {
            name: 'rc',
            string: String.raw`r_c`,
            value: 0,
            description: 'Радиус скважины',
            calculable: false,
          },
          {
            name: 'S',
            string: String.raw`S`,
            value: 0,
            description: 'Коэффициент скважинности',
            calculable: false,
          },
        ],
      },
    },
    {
      title: '8.	Формула для подсчёта запасов нефти',
      text: 'Служит для оценки объема нефти, который можно извлечь из породы, учитывая её характеристики, такие как площадь месторождения, мощность пласта, пористость, и изменения насыщенности нефти с течением времени.',
      cardInfo: {
        formula: 'A * h * f * (Si - S0)',
        mathExpression: String.raw`N = A \\cdot h \\cdot \\Phi \\cdot (Si_0 - S_0)`,
        variables: [
          {
            name: 'N',
            string: String.raw`N`,
            value: 0,
            description: 'Запасы нефти в месторождении',
            calculable: true,
          },
          {
            name: 'A',
            string: String.raw`A`,
            value: 0,
            description: 'Площадь месторождения',
            calculable: false,
          },
          {
            name: 'h',
            string: String.raw`h`,
            value: 0,
            description: 'Мощность пласта',
            calculable: false,
          },
          {
            name: 'f',
            string: String.raw`Phi`,
            value: 0,
            description: 'Пористость',
            calculable: false,
          },
          {
            name: 'S0',
            string: String.raw`S_i0`,
            value: 0,
            description: 'Начальная насыщенность нефти',
            calculable: false,
          },
          {
            name: 'Si',
            string: String.raw`S_0`,
            value: 0,
            description: 'Текущая насыщенность нефти',
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
