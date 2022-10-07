import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter,Route,Routes} from "react-router-dom";
import IdInfo from './components/pages/IDCard/id';
import IdCards from './components/pages/IDCard/index'
import PassPorts from './components/pages/PassPort/index'
import {BrowserRouter} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/idcard/id" element={<IdInfo/>}/>
      <Route path="/idcards" element={<IdCards />} />
      <Route path="/passports" element={<PassPorts />} />
    </Routes>

  </BrowserRouter>
);

