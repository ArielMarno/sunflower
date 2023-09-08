import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './paginas/Home';
import PagServicios from './paginas/PagServicios';
import Portfolio from './componentes/Portfolio';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='servicios' element={<PagServicios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
