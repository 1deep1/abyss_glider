import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Header from './components/Header';
import Footer from './components/Footer';

import routes from '../src/routes';

import './global.css';
import App from './App';

const routeComponents = routes.map(({path, element}, key) => <Route path={path} element={element} key={key} />);
const root = document.getElementById("root");

const APP = (
  <BrowserRouter>
    <Header/>
    <Helmet
        titleTemplate="%s | Abyss Glider"
        htmlAttributes={{ lang : 'en' }}
    />
    <Routes>{routeComponents}</Routes>
    <App/>
    <Footer/>
  </BrowserRouter>
)

if (root.hasChildNodes()) {
  hydrate(APP, root);
} else {
  render(APP, root);
}