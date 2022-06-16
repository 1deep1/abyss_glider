
import React from 'react'
import Home from './pages/Home'
import NewsDetails from './components/NewsDetails'
import Page404 from './pages/Page404'

const routes = [
  {
    key: 1,
    path: "/",
    exact: true,
    element: <Home/>
  },
  {
    key: 2,
    path: "/news/:newsId",
    exact: false,
    element: <NewsDetails/>
  },
  {
    key: 3,
    path: "*",
    exact: false,
    element: <Page404/>
  },
];

export default routes;