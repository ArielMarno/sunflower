import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import logom44 from "../assets/Muebles 44/muebles44.jpg";
import tarjetas from "../assets/Muebles 44/muebles44-tarjeta.png";
import branding from "../assets/Muebles 44/muebles44-branding.png";
import catalogo from "../assets/Muebles 44/muebles44-catálogo.png";
import feed from "../assets/Muebles 44/muebles44-feed.png";
import local from "../assets/Muebles 44/muebles44-logo.png";
import tienda from "../assets/Muebles 44/muebles44-tienda.png";
import google from "../assets/Muebles 44/muebles44-google.png";
const Muebles44 = () => {
  return (
    <div className="pag-muebles44">
        <NavBar />
        <div className="banner-portfolio">
            <h1>Muebles 44</h1>
        </div>
        <section className="presentacion">
          <aside className="logo-presentacion">
            <img src={logom44} alt="" className="logo muebles 44"/>
          </aside>
          <aside className="marca-proyecto">
            <article className="marca">
              <h3>MUEBLES 44</h3>
              <p> Un emprendimiento familiar con mas de 10 años de trayectoria en la elaboración de muebles de pino y venta de productos de decoración.
              Bárbara y Gonzalo realizan trabajos a medida, tienen distribución a nivel nacional y cuentan con una amplia variedad de plantas artificiales en su local.</p>
            </article>
            <article className="proyecto">
                <h3>PROYECTO</h3>
                  <p>Diseño de posteos e historias. <br />
                    Atención al usuario. <br />
                    Diseño de tarjetas. <br />
                    Logo y branding. <br />
                    Gestión en MercadoLibre. <br />
                    Creación de e-Commerce. <br />
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
              <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={tarjetas} className="d-block" alt="tarjetas"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Diseño De Tarjetas Corporativas</h5>
                  <p>Doble faz, respetando elementos y colores de la marca.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={tienda} className="d-block" alt="tienda onlinbe"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Creación De e-Commerce</h5>
                  <p>Utilizando TiendaNube realizamos la carga de todos sus productos.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={branding} className="d-block" alt="camiseta"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Branding e Identidad De Marca</h5>
                  <p>Paleta de colores, tipografia y elementos graficos.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={local} className="d-block" alt="tienda con cartel"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Creación De Logo</h5>
                  <p>Respetando el rubro del emprendimiento y el 44 significativo para los dueños.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={google} className="d-block" alt="google negocios"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Creación De Google Negocios</h5>
                  <p>Creación desde cero, seguimiento de opiniones y carga de imágenes.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={feed} className="d-block" alt="feed de instagram"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Diseño De Feed Para Instagram</h5>
                  <p>Manteniendo el estilo de marca y elementos creados.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={catalogo} className="d-block" alt="catalogo"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Edición De Imagenes Para Catalogo</h5>
                  <p>Utilizados en su tienda virtual, listado de precios y MercadoLibre.</p>
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

export default Muebles44;