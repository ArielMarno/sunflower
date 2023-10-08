import '../estilos/servicios.css';
import { Link } from 'react-router-dom';
const Servicios = () => {
  return (
    <div className="servicios">

      <div className="servicios-titulo">
        <h2>Mejora Tu Alcance Implementando Una Estrategia, Dale La Confianza A Tus Clientes Para Apostar Por Tu Negocio</h2>
        <p>Nuestros servicios te permitiran optimizar cada area de tu empresa para alcanzar tus objetivos.</p>
      </div>

      <div className="contenedor-tarjetas">

        <div className="card">
          <img src="https://i.pinimg.com/564x/c9/0c/74/c90c7481be208a6db44c8a1e1e406319.jpg" className="card-img-top" alt="google ads"/>
          <div className="card-body">
          <h5 className="card-title">Publicidad Online</h5>
          <p className="card-text">Promocionamos tus productos o servicios a través de redes sociales, motores de busqueda u otros sitios web con el objetivo de aumentar la visibilidad de tu marca y llegar a tus potenciales clientes.</p>
          </div>
        </div>
        
        <div className="card">
          <img src="https://img.asmedia.epimg.net/resizer/LT5-N0dVVBilAJcUBlzfqDvl7Gg=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/KSCVXMRMGFOJXBFLRQ2TUCRCN4.jpg" className="card-img-top" alt="mercado libre"/>
          <div className="card-body">
          <h5 className="card-title">Mercado Libre</h5>
          <p className="card-text">¿Querés vender tus productos en MercadoLibre? Te ofrecemos una atención personalizada para que tus publicaciones sean más visibles y atractivas. Además, te ayudamos a optimizar tus ventas y mejorar la experiencia del cliente.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="redes sociales"/>
          <div className="card-body">
          <h5 className="card-title">Gestion De Redes</h5>
          <p className="card-text">Te ayudamos a crear y mantener una comunidad en línea comprometida con tu marca. Nos aseguramos de que tus perfiles sociales estén actualizados y de que tus publicaciones sean atractivas y relevantes para tu audiencia.</p>
          </div>
        </div>
      </div>
      <Link to="/servicios">
        <button className="servicios-btn">VER MAS</button>
      </Link>
      
    </div>
  )
}

export default Servicios