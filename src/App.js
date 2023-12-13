import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './paginas/Home';
import PagServicios from './paginas/PagServicios';
import BrujaSustentable from './paginas/BrujaSustentable';
import Hidrosir from './paginas/Hidrosir';
import ScrollToTop from './componentes/ScrollToTop';
import Muebles44 from './paginas/Muebles44';
import GabrielGuardiola from './paginas/GabrielGuardiola';

function App() {
  return (
    <BrowserRouter className="App">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='servicios' element={<PagServicios />} />
        <Route path='brujasustentable' element={<BrujaSustentable />} />
        <Route path='hidrosir' element={<Hidrosir />} />
        <Route path='muebles44' element={<Muebles44 />} />
        <Route path='gabrielguardiola' element={<GabrielGuardiola />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
