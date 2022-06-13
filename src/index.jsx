import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from "react-helmet"
//import { hydrate, render } from "react-dom";
import './global.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import NewsDetails from './components/NewsDetails'
import Page404 from './pages/Page404'

//ReactDOM.hydrate(<App />, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
   <Header/>
     <Helmet
      titleTemplate="%s | Abyss Glider"
      htmlAttributes={{ lang : 'en' }}
    />
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path={'/news/:newsId'} element={<NewsDetails/>} />
      <Route path='/*' element={<Page404/>} />
    </Routes>
    <App />
  <Footer/>
</BrowserRouter>
);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// const APP = (
// <BrowserRouter>
//   <Header/>
//     <Helmet
//       titleTemplate="%s | Abyss Glider"
//       htmlAttributes={{ lang : 'en' }}
//     />
//     <Routes>
//       <Route exact path='/' element={<Home/>} />
//       <Route path={'/news/:newsId'} element={<NewsDetails/>} />
//       <Route path='/*' element={<Page404/>} />
//     </Routes>
//   <Footer/>
// </BrowserRouter>)

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(APP, rootElement);
// } else {
//   render(APP, rootElement);
// }