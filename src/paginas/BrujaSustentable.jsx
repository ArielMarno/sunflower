import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import bslogo from "../assets/BrujaSustentable/logo-bs.png";
import post1 from "../assets/BrujaSustentable/bs-post1.png";
import post2 from "../assets/BrujaSustentable/bs-post2.png";
import feed from "../assets/BrujaSustentable/bs-stories.png";
import cartas from "../assets/BrujaSustentable/bs-cartas.png";
const BrujaSustentable = () => {
  return (
    <div className="brujasustentable">
        <NavBar />
        <div className="banner-portfolio">
            <h1>Bruja Sustentable</h1>
        </div>
        <section className="presentacion">
          <aside className="logo-presentacion">
            <img src={bslogo} alt="" />
          </aside>
          <aside className="marca-proyecto">
            <article className="marca">
              <h3>BRUJA SUSTENTABLE</h3>
              <p> Es un proyecto creado por Fiamma, dedicado al desarrollo espiritual, sesiones personalizadas, venta de productos y capacitaciones. <br />
              A través de su cuenta de Instagram, ella busca inspirar y educar a otros sobre la importancia de la salud espiritual y física.  </p>
            </article>
            <article className="proyecto">
                <h3>PROYECTO</h3>
                  <p>Diseño de posteos e historias interactivas. <br />
                  Desarrollo de plataforma para curso on-line. <br />
                  Publicidad y asesoramiento de cuenta comercial.</p>
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
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={post1} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Gestion De Redes Sociales</h5>
                  <p>Edicion de imagen, generación de copy y programación de publicaciones.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={post2} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Diseño De Feed Para Instagram</h5>
                  <p>Respetando colores corporativos y manteniendo el estilo de marca.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={feed} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Creación De Historias Estaticas e Interactivas</h5>
                  <p>Agenda con turnos disponibles, cartas con mensajes, avisos importantes, entre otros.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={cartas} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Diseño De Cartas Oráculo Con Mensajes Guía</h5>
                  <p>Creación de imagenes interactivas para historias de Instagram.</p>
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

export default BrujaSustentable