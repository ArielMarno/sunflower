import '../estilos/portafolio.css';
import { Link } from "react-router-dom";
import brujasustentable from "../assets/portfolio/logo-brujasustentable.png";
import hidrosir from "../assets/portfolio/logo-hidrosir.png";
import muebles44 from "../assets/portfolio/logo-muebles44.png";
import guardiola from  "../assets/portfolio/logo-guardiola.png";

const Portfolio = () => {
  return (
    <div className="trabajos" id="portfolio" name="portafolio">
        <div className="portfolio-titulo">
            <h2>Te Compartimos Algunos De Nuestros Trabajos Y Sus Resultados</h2>
            <p>Sabemos la importancia de la comunicación en el proceso creativo y participamos siempre de manera activa y responsable en tu proyecto.</p>
        </div>
        <div className="enlaces-portfolio">
            <div className="box-portafolio">
                <img src={brujasustentable} alt="logo bruja sustentable" />
                <div className="capa">
                   <Link to="BrujaSustentable">VER PORTFOLIO</Link>  
                </div>
            </div>
            <div className="box-portafolio">
                <img src={hidrosir} alt="logo hidrosir" />
                <div className="capa">
                    <Link to="Hidrosir">VER PORTFOLIO</Link>
                </div>
                
            </div>
            <div className="box-portafolio">
                <img src={muebles44} alt="logo muebles 44" />
                <div className="capa">
                    <Link to="Muebles44">VER PORTFOLIO</Link>
                </div>
            </div>
            <div className="box-portafolio">
                <img src={guardiola} alt="logo gabriel guardiola" />
                <div className="capa">
                    <Link to="ExpGabrielGuardiola">VER PORTFOLIO</Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio
