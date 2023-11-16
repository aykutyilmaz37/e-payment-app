import Loadable from 'react-loadable';
import React from 'react';

const PageNavigation = (loader:any) =>
  Loadable({
    loader: () => loader,
    loading: () => <div />,
  });

export const routes = [
  {
    path: '/',
    Component: PageNavigation(import('pages/packages')),
  },
  {
    path: '/package-detail/:id',
    Component: PageNavigation(import('pages/package-detail')),
  },
  {
    path: '/payment',
    Component: PageNavigation(import('pages/payment')),
  },
  {
    path: '/success/:id',
    Component: PageNavigation(import('pages/success')),
  },
];
