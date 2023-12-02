import React from 'react';

import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#323234',
      }}
    >
      <Header />

      <Container className="mt-4 flex-grow-1">
        <Outlet />
      </Container>

      <Footer />
    </div>
  );
};

export default Layout;
