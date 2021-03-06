import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';

import Materias from '../pages/Materias';
import PlanesEstudio from '../pages/PlanesEstudio';
import Error404 from '../pages/Error404';
import Carreras from '../pages/Carreras';

export default function Approuter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/carreras" element={<Carreras />} />
        <Route exact path="/materias" element={<Materias />} />
        <Route exact path="/planes-de-estudio" element={<PlanesEstudio />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}
