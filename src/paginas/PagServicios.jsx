import React from 'react'
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";

const PagServicios = () => {
  return (
    <div className='pag-servicios'>
        <NavBar />
        <section>
          <h1>SERVICIOS</h1>
        </section>
        <div className='tarjetas-servicios'>
         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://img.freepik.com/premium-photo/social-media-icons-logos-mobile-phone-screen-3d_125322-177.jpg?w=740" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Community Manager</h5>
                <p className="card-text">Te ayudamos a crear y mantener una comunidad en línea comprometida con tu marca. Nos aseguramos de que tus perfiles sociales estén actualizados y de que tus publicaciones sean atractivas y relevantes para tu audiencia.</p>
                <a href="" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.pexels.com/photos/7147720/pexels-photo-7147720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Diseño Grafico</h5>
                <p className="card-text">Creamos tu identidad visual única y coherente para tu marca. Desde el diseño de logotipos hasta la creación de gráficos personalizados. Hacemos realidad tu visión.</p>
                <a href="" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?w=1380&t=st=1693958214~exp=1693958814~hmac=7927de8316d4736724b8a4ecd30512c8dd8a2cd0a15d1cd5ad0c4ae1e9db7ec5" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">e-Commerce</h5>
                <p className="card-text">Creamos tu tienda en línea utilizando plataformas como Tiendanube, Empretienda y Tiendup. Nos aseguramos de que sea fácil de usar y que tus productos destaquen.</p>
                <a href="" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.pexels.com/photos/11894290/pexels-photo-11894290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Edición Multimedia</h5>
                <p className="card-text">¿Necesitas crear contenido multimedia para tu sitio web o redes sociales? Editamos tus videos y fotos para lograr un producto atractivo y profesional que atraiga la atención de tu audiencia.</p>
                <a href="" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Desarrollo Web</h5>
                <p className="card-text">Desarrollamos de forma completa y profesional tu sitio Web a la medida de tus necesidades con el objetivo de que sea atractivo, fácil de usar y funcional para sus visitantes.</p>
                <a href="" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://img.freepik.com/premium-photo/young-girl-pointing-google-ads-smart-phone-screen-during-pandemic-coronavirus-prevention-google-ads-is-online-platform-advertising-service-offering_21483-272.jpg?w=740" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Publicidad Online</h5>
                <p className="card-text">Promocionamos tus productos o servicios a través de redes sociales, motores de busqueda u otros sitios web con el objetivo de aumentar la visibilidad de tu marca y llegar a tus potenciales clientes.</p>
                <a href="" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

         <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://img.asmedia.epimg.net/resizer/LT5-N0dVVBilAJcUBlzfqDvl7Gg=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/KSCVXMRMGFOJXBFLRQ2TUCRCN4.jpg" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Mercado Libre</h5>
                <p className="card-text">¿Querés vender tus productos en MercadoLibre? Te ofrecemos una atención personalizada para que tus publicaciones sean más visibles y atractivas. Además, te ayudamos a optimizar tus ventas y mejorar la experiencia del cliente.</p>
                <a href="" type='buttom' className='servicios-btn'>CONSULTAR</a>
              </div>
            </div>
           </div>
         </div>

        </div>
      <Footer />
    </div>
  )
}

export default PagServicios