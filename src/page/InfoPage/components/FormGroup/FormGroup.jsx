import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { MathComponent } from 'mathjax-react';

const FormGroup = ({ setVariableValues, variableValues, item, result }) => {
  const handleInputChange = (name, value) => {
    setVariableValues({ ...variableValues, [name]: value });
  };

  return (
    <Form.Group
      as={Row}
      className="mb-3 d-flex align-items-center justify-content-between"
    >
      <Form.Label
        column
        xs={4}
        className="d-flex align-items-center justify-content-start text-white"
        style={{ width: 'fit-content' }}
      >
        <MathComponent tex={item.string} /> -
        <span style={{ fontSize: '14px' }}> {item.description}</span>
      </Form.Label>
      <Col xs={3}>
        <Form.Control
          type="number"
          disabled={item.calculable ? true : false}
          value={item.calculable ? result : variableValues[item.name]}
          style={item.calculable ? { backgroundColor: '#6aff75' } : {}}
          onChange={(event) => handleInputChange(item.name, event.target.value)}
        />
      </Col>
    </Form.Group>
  );
};

export default FormGroup;
