import Caracteristicas from '../componentes/Caracteristicas';
import Contacto from '../componentes/Contacto';
import Footer from '../layouts/Footer';
import Inicio from '../componentes/Inicio';
import NavBar from '../layouts/NavBar';
import Portfolio from '../componentes/Portfolio';
import Servicios from '../componentes/Servicios';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Inicio />
      <Caracteristicas />
      <Servicios />
      <Portfolio />
      <Contacto />
      <Footer />
    </div>
  )
}

export default Home;
