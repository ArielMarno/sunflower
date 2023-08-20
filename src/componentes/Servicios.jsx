
const Servicios = () => {
  return (
    <div className="servicios">

      <div className="servicios-titulo">
        <h2>Mejora Tu Alcance Implementando Una Estrategia, Dale La Confianza A Tus Clientes Para Apostar Por Tu Negocio</h2>
        <p>Con los servicios que te ofrecemos podes mejorar cada aspecto de tu empresa para obtener los resultados que estabas buscando.</p>
      </div>

      <div className="contenedor-tarjetas">

        <div className="card">
          <img src="https://i.pinimg.com/564x/c9/0c/74/c90c7481be208a6db44c8a1e1e406319.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 class="card-title">Publicidad Online</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        
        <div className="card">
          <img src="https://img.asmedia.epimg.net/resizer/LT5-N0dVVBilAJcUBlzfqDvl7Gg=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/KSCVXMRMGFOJXBFLRQ2TUCRCN4.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 class="card-title">Mercado Libre</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 class="card-title">Gestion De Redes</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <a href="#" type="buttom" className="servicios-btn">VER MAS</a>
    </div>
  )
}

export default Servicios