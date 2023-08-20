import './App.css';
import Caracteristicas from './componentes/Caracteristicas';
import Inicio from './componentes/Inicio';
import NavBar from './componentes/NavBar';
import Portfolio from './componentes/Portfolio';
import Servicios from './componentes/Servicios';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Caracteristicas />
      <Servicios />
      <Portfolio />
    </div>
  );
}

export default App;
