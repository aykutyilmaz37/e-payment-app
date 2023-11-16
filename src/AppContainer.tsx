import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { routes } from 'routes';
import { MainLayout } from 'components';
import { RootState } from 'store/rootReducer';
import Signup from 'pages/signup';

const AppContainer: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.app.isAuthenticated
  );

  return (
    <BrowserRouter basename={'/'}>
      <Routes>
        <Route path='/signup' key='/signup' element={<Signup />} />
        {isAuthenticated ? (
          routes.map(({ path, Component }) => (
            <Route
              path={path}
              key={path}
              element={
                <MainLayout>
                  <Component />
                </MainLayout>
              }
            />
          ))
        ) : (
          <Route path='*' element={<Navigate to='/signup' />} />
        )}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppContainer;
