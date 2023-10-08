import '../estilos/navbar.css';
import { Link } from 'react-router-dom';
import logo from "../assets/logo_navbar.png";
import facebook from "../assets/social/facebook.png";
import instagram from "../assets/social/instagram.png";
import whatsapp from "../assets/social/whatsapp.png";
import email from "../assets/social/email.png";
const NavBar = () => {
  return (
    <div>
        <nav className="navbar fixed-top bg-dark navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#inicio"><img src={logo} alt='logo sunflower'/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Servicios">Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#portfolio">Portafolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#contacto">Contacto</a>
                        </li>
                    </ul>

                    <div className="social">
                        <a href="https://www.facebook.com/sunflower.agencia" target="_blank" rel="noopener noreferrer"><img src={facebook} alt='logo facebook'/></a>
                        <a href="https://www.instagram.com/sunflower_agencia/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt='logo instagram'/></a>
                        <a href="https://wa.me/message/TPKQBG3WOOUFP1" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt='logo whatsapp'/></a>
                        <a href="mailto: agenciadigital.sunflower@gmail.com"><img src={email} alt='logo arroba'/></a>
                    </div>
                </div>

            </div>
        </nav>
    </div>
  )
}

export default NavBar;