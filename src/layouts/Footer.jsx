import '../estilos/footer.css';
import logo from "../assets/logo-footer.png";
import facebook from "../assets/social/facebook.png";
import instagram from "../assets/social/instagram.png";
import whatsapp from "../assets/social/whatsapp.png";
import email from "../assets/social/email.png";
import ubicacion from "../assets/social/ubicacion.png"

const Footer = () => {
  return (
    <div className='footer'>
                
                <div className='marca'>
                    <img src={logo} alt="logo sunflower" />
                </div>

                <div className='formas-contacto'>
                    <a href="https://www.facebook.com/sunflower.agencia" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="logo facebook" /></a>
                    <a href="https://www.instagram.com/sunflower_agencia/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="logo instagram" /></a>
                    <a href="https://wa.me/message/TPKQBG3WOOUFP1" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="logo whatsapp" /></a>
                    <a href="mailto: agenciadigital.sunflower@gmail.com"><img src={email} alt="" /></a>
                    <a href="https://goo.gl/maps/LqHN7RFHGwKj3bESA" target="_blank" rel="noopener noreferrer"><img src={ubicacion} alt="logo arroba" /></a>
                </div>

                <div className="copy">
                    <p>Copyright © 2023 <span className="copy-marca">SunFlower</span> Agencia Digital. Todos los derechos reservados.</p>
                </div>

    </div>
  )
}

export default Footer