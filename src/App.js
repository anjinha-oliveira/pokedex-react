import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css';
import Home from './pages/Home';
import PokeTypes from './pages/PokeTypes';

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/pokemon/:number/" element={<PokeTypes />} />
    </Routes>
  </BrowserRouter>   
);
  }
export default App;

