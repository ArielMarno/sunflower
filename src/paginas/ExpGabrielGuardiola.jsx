import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import expgg from "../assets/ExpGabrielGuardiola/gg-logo.png";
import tarjeta from "../assets/ExpGabrielGuardiola/gg-tarjeta.png";
import pagina from "../assets/ExpGabrielGuardiola/gg-pagina.png";
import presentacion from "../assets/ExpGabrielGuardiola/gg-presentacion.png";
import feed from "../assets/ExpGabrielGuardiola/gg-feed.png";
import edicion from "../assets/ExpGabrielGuardiola/gg-edicion.png";



const ExpGabrielGuardiola = () => {
  return (
    <div className="exp-gabrielguardiola">
        <NavBar />
        <div className="banner-portfolio">
            <h1>Gabriel Guadiola</h1>
        </div>
        <section className="presentacion">
          <aside className="logo-presentacion">
            <img src={expgg} alt="" />
          </aside>
          <aside className="marca-proyecto">
            <article className="marca">
              <h3>GRABRIEL GUARDIOLA</h3>
              <p> Experto en negocios inmobiliarios con más de 5 años de experiencia. Es reconocido como agente elite en exp-spain, una empresa líder en el sector. A través de sus redes sociales y su página web, él ofrece sus servicios profesionales para contactar con personas que quieren vender su propiedad y ofrecerles una solución rápida y eficaz.</p>
            </article>
            <article className="proyecto">
                <h3>PROYECTO</h3>
                  <p>Diseño de posteos. <br />
                  Creación de pagina web. <br />
                  Edición de imagenes y videos.<br/>
                  Creación de presentaciones corporativa.</p>
            </article>
          </aside>
        </section>
        <section className="container">
        <div id="carouselCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={tarjeta} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Diseño de tarjetas corporativas</h5>
                  <p>Doble faz, respetando el manual de marca de Exp-Spain.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pagina} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Creación de pagina web</h5>
                  <p>Con la plataforma Jimdo, creamos su sitio donde explica su trabajo y muestra propiedades en venta.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={edicion} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Edición de imagenes</h5>
                  <p>Resaltamos los aspectos esenciales de las propiedades.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={feed} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Gestión de redes sociales</h5>
                  <p>Creación de post, generación de copys y programación de publicaciones.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={presentacion} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Creación de presentaciónes comerciales</h5>
                  <p>Con presentación, modo de trabajo, herramientas y mas.</p>
                </div>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default ExpGabrielGuardiola