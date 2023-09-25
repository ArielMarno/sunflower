import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import hidrosir from "../assets/Hidrosir/logo-hidrosir.png";
import carousel from "../assets/Hidrosir/hidrosir-carrusel.png";
import folleto from "../assets/Hidrosir/hidrosir-folleto.png";
import post from "../assets/Hidrosir/hidrosir-post.png";
import stories from "../assets/Hidrosir/hidrosir-stories.png";
import tarjeta from "../assets/Hidrosir/hidrosir-tarjeta.png";
const Hidrosir = () => {
  return (
    <div className="pag-hidrosir">
        <NavBar />
        <div className="banner-portfolio">
            <h1>Hidrosir</h1>
        </div>
        <section className="presentacion">
          <aside className="logo-presentacion">
            <img src={hidrosir} alt="" />
          </aside>
          <aside className="marca-proyecto">
            <article className="marca">
              <h3>HIDROSIR</h3>
              <p> Es una empresa familiar con años de experiencia en el tratamiento de aguas duras.  <br />Javier y Andrea, sus dueños, no solamente venden sus productos domiciliarios, tambien brindan capacitación y venta de productos a emprendedores para que puedan desempeñarse en el rubro.  </p>
            </article>
            <article className="proyecto">
                <h3>PROYECTO</h3>
                  <p>Diseño de posteos e historias. <br />
                  Atención al usuario. <br />
                  Diseño de folletería y tarjetas. <br />
                  Publicidad con Google y meta ads.</p>
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
                <img src={post} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Gestion De Redes Sociales</h5>
                  <p>Edicion de imagen, generación de copy y programación de publicaciones.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={folleto} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Diseño Para Folleteria</h5>
                  <p>Ideal para promociones o información importante.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={carousel} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Diseño De Feed Para Instagram</h5>
                  <p>Manteniendo el estilo de marca y colores corporativos.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={stories} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Creación De Historias Promocionales e Informativas</h5>
                  <p>Horarios de atención, avisos importantes y nuevos ingresos, entre otros.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={tarjeta} className="d-block" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Diseño De Tarjetas Corporativas</h5>
                  <p>Listo para enviar a grafica, utilizando su manual de marca.</p>
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

export default Hidrosir