import '../estilos/pagservicios.css';
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";

const PagServicios = () => {
  return (
    <div className='pag-servicios'>
        <NavBar />
        <section>
          <h1>Servicios</h1>
        </section>
        <div className='tarjetas-servicios'>
         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://img.freepik.com/premium-photo/social-media-icons-logos-mobile-phone-screen-3d_125322-177.jpg?w=740" className="img-fluid rounded-start" alt="redes sociales"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Community Manager</h5>
                <p className="card-text">Te ayudamos a crear y mantener una comunidad en línea comprometida con tu marca. Nos aseguramos de que tus perfiles sociales estén actualizados y de que tus publicaciones sean atractivas y relevantes para tu audiencia.</p>
                <a href="https://forms.gle/cozpeCH6tU5T6UvL6" target="_blank" rel="noopener noreferrer" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.pexels.com/photos/7147720/pexels-photo-7147720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="diseñador grafico"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Diseño Gráfico</h5>
                <p className="card-text">Creamos tu identidad visual única y coherente para tu marca. Desde el diseño de logotipos hasta la creación de gráficos personalizados. Hacemos realidad tu visión.</p>
                <a href="https://forms.gle/f73BpCjNKR9Qk4o88" target="_blank" rel="noopener noreferrer" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="tienda online"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">e-Commerce</h5>
                <p className="card-text">Creamos tu tienda en línea utilizando plataformas como Tiendanube, Empretienda y Tiendup. Nos aseguramos de que sea fácil de usar y que tus productos destaquen.</p>
                <a href="https://forms.gle/fCYZAKEpuoFMxK8A9" target="_blank" rel="noopener noreferrer" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.pexels.com/photos/11894290/pexels-photo-11894290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="editor multimedia"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Edición Multimedia</h5>
                <p className="card-text">¿Necesitas crear contenido multimedia para tu sitio web o redes sociales? Editamos tus videos y fotos para lograr un producto atractivo y profesional que atraiga la atención de tu audiencia.</p>
                <a href="https://forms.gle/PK5tVgKGHgAPxoLB6" target="_blank" rel="noopener noreferrer" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="editor de codigo"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Desarrollo Web</h5>
                <p className="card-text">Desarrollamos de forma completa y profesional tu sitio Web a la medida de tus necesidades con el objetivo de que sea atractivo, fácil de usar y funcional para sus visitantes.</p>
                <a href="https://forms.gle/hM8Z9fEvbCBmW1TdA" target="_blank" rel="noopener noreferrer" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://img.freepik.com/premium-photo/young-girl-pointing-google-ads-smart-phone-screen-during-pandemic-coronavirus-prevention-google-ads-is-online-platform-advertising-service-offering_21483-272.jpg?w=740" className="img-fluid rounded-start" alt="google ads"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Publicidad Online</h5>
                <p className="card-text">Promocionamos tus productos o servicios a través de redes sociales, motores de busqueda u otros sitios web con el objetivo de aumentar la visibilidad de tu marca y llegar a tus potenciales clientes.</p>
                <a href="https://forms.gle/x9K7NX5jM94Yo7pa7" target="_blank" rel="noopener noreferrer" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://img.asmedia.epimg.net/resizer/LT5-N0dVVBilAJcUBlzfqDvl7Gg=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/KSCVXMRMGFOJXBFLRQ2TUCRCN4.jpg" className="img-fluid rounded-start" alt="cajas mercado libre"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Mercado Libre</h5>
                <p className="card-text">¿Querés vender tus productos en MercadoLibre? Te ofrecemos una atención personalizada para que tus publicaciones sean más visibles y atractivas. Además, te ayudamos a optimizar tus ventas y mejorar la experiencia del cliente.</p>
                <a href="https://forms.gle/oMwFkGJQHJwn8pcg7" target="_blank" rel="noopener noreferrer" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

        </div>
      <Footer />
    </div>
  )
}

export default PagServicios;