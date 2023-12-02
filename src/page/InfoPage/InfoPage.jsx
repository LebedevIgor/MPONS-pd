import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { Col, Row, Form, Button } from 'react-bootstrap';
import * as math from 'mathjs';
import { MathComponent } from 'mathjax-react';
import FormGroup from './components/FormGroup/FormGroup';
import Chart from './components/Chart/Chart';

const InfoPage = () => {
  const location = useLocation();
  const cardData = location.state;
  const [variableValues, setVariableValues] = useState({});
  const [result, setResult] = useState();
  const [count, setCount] = useState(1);
  const [chartData, setChartData] = useState([
    { name: `Результат ${count}`, result: 0 },
  ]);

  const calculateResult = () => {
    const formula = cardData.cardInfo.formula;

    if (typeof formula !== 'string') {
      console.error('Формула не является строкой');
      return;
    }

    const substitutedFormula = formula.replace(
      /(\w+)/g,
      (match) => variableValues[match] || match
    );

    setCount((prevCount) => prevCount + 1);

    try {
      const result = math.evaluate(substitutedFormula);
      setResult(result);
      setChartData((prevChartData) => [
        ...prevChartData,
        { name: `Результат ${count}`, result: result },
      ]);
    } catch (error) {
      console.error('Ошибка при вычислении:', error);
    }
  };

  return (
    <>
      <Row className="justify-content-center mt-4 mb-4">
        <Col xs={12} className="text-center mb-4">
          <h1 className="text-light">{cardData.title}</h1>
        </Col>
        <Row className="justify-content-center mt-4 mb-4">
          <Col xs={12} className="text-white fs-4">
            {cardData.text}
          </Col>
        </Row>
        <Col xs={12} className="text-white fs-4">
          {cardData.cardInfo.mathExpression && (
            <MathComponent tex={cardData.cardInfo.mathExpression} />
          )}
        </Col>
        <Col
          xs={12}
          className="mt-4 d-flex justify-content-center align-items-center"
        >
          <Form>
            {cardData.cardInfo.variables.map((item, index) => (
              <FormGroup
                setVariableValues={setVariableValues}
                variableValues={variableValues}
                item={item}
                result={result}
                key={index}
              />
            ))}
          </Form>
          <Chart chartData={chartData} />
        </Col>
        <Col xs={12} className="mt-4 text-center">
          <Button className="btn btn-light" onClick={calculateResult}>
            Расчитать
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default InfoPage;
