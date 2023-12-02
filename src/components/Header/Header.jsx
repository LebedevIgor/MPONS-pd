import React from 'react';

import { Navbar, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Oil from '../../icons/oil';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          style={{ cursor: 'pointer' }}
          onClick={() => handleClick()}
        >
          <Oil />
          <span style={{ marginLeft: '12px' }}>МПОНС</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
