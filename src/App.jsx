// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mapa from './Mapa';
import Estadistica_tiempo_real from './tiempo_real_estadistica';
import Estadistica_corto_plazo from './corto_plazo_estadistica';
import Estadistica_mediano_plazo from './mediano_plazo_estadistica';
import Estadistica_largo_plazo from './largo_plazo_estadistica';

function Rutas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mapa />} />
        <Route path="/estadistica_tiempo_real" element={<Estadistica_tiempo_real />} />
        <Route path="/estadistica_corto_plazo" element={<Estadistica_corto_plazo />} />
        <Route path="/estadistica_mediano_plazo" element={<Estadistica_mediano_plazo />} />
        <Route path="/estadistica_largo_plazo" element={<Estadistica_largo_plazo />} />
      </Routes>
    </Router>
  );
}

export default Rutas;
