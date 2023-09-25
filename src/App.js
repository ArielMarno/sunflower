import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './paginas/Home';
import PagServicios from './paginas/PagServicios';
import BrujaSustentable from './paginas/BrujaSustentable';
import Hidrosir from './paginas/Hidrosir';
import ScrollToTop from './componentes/ScrollToTop';
import Muebles44 from './paginas/Muebles44';
import ExpGabrielGuardiola from './paginas/ExpGabrielGuardiola';

function App() {
  return (
    <Router className="App">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Servicios' element={<PagServicios />} />
        <Route path='BrujaSustentable' element={<BrujaSustentable />} />
        <Route path='Hidrosir' element={<Hidrosir />} />
        <Route path='Muebles44' element={<Muebles44 />} />
        <Route path='ExpGabrielGuardiola' element={<ExpGabrielGuardiola />} />
      </Routes>
    </Router>
  );
}

export default App;
