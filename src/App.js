import React, { Suspense, lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout/Layout'));
const MainPage = lazy(() => import('./page/MainPage/MainPage'));
const InfoPage = lazy(() => import('./page/InfoPage/InfoPage'));

const App = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/:id" element={<InfoPage />} />
            <Route path="*" element={<MainPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
