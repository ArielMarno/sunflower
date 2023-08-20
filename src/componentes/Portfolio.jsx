import brujasustentable from "../assets/box-portfolio/logo-brujasustentable.png";
import hidrosir from "../assets/portfolio/logo-hidrosir.png";
import muebles44 from "../assets/portfolio/logo-muebles44.png";
import guardiola from  "../assets/portfolio/logo-guardiola.png";

const Portfolio = () => {
  return (
    <div className="trabajos">
        <div className="portfolio-titulo">
            <h2>Te Compartimos Algunos De Nuestros Trabajos Y Sus Resultados</h2>
            <p>Confiamos en la comunicacion en el proceso creativo y participamos en tu proyecto de manera activa y responsable.</p>
        </div>
        <div className="enlaces-portfolio">
            <div className="box-portafolio">
                <img src={brujasustentable} alt="" />
                <div className="capa">
                   <a href="">VER PORTFOLIO</a>  
                </div>
            </div>
            <div className="box-portafolio">
                <img src={hidrosir} alt="" />
                <div className="capa">
                    <a href="">VER PORTFOLIO</a>
                </div>
                
            </div>
            <div className="box-portafolio">
                <img src={muebles44} alt="" />
                <div className="capa">
                    <a href="">VER PORTFOLIO</a>
                </div>
            </div>
            <div className="box-portafolio">
                <img src={guardiola} alt="" />
                <div className="capa">
                    <a href="">VER PORTFOLIO</a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio
