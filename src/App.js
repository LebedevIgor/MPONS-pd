import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './page/MainPage/MainPage';
import InfoPage from './page/InfoPage/InfoPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<InfoPage />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
