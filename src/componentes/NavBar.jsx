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
                <a className="navbar-brand" href="#"><img src={logo}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">INICIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SERVICIOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PORTAFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACTO</a>
                        </li>
                    </ul>

                    <div className="social">
                        <a href="https://www.facebook.com/sunflower.agencia" target="_blank" rel="noopener noreferrer"><img src={facebook}/></a>
                        <a href="https://www.instagram.com/sunflower_agencia/" target="_blank" rel="noopener noreferrer"><img src={instagram}/></a>
                        <a href="https://wa.me/message/TPKQBG3WOOUFP1" target="_blank" rel="noopener noreferrer"><img src={whatsapp}/></a>
                        <a href="mailto: agenciadigital.sunflower@gmail.com"><img src={email}/></a>
                    </div>
                </div>

            </div>
        </nav>
    </div>
  )
}

export default NavBar;