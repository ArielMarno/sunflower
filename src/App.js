import './App.css';
import Caracteristicas from './componentes/Caracteristicas';
import Cover from './componentes/Cover';
import NavBar from './componentes/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cover />
      <Caracteristicas />
    </div>
  );
}

export default App;
