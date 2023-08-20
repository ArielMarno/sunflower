import versatilidad from "../assets/caracteristicas/versatilidad.png";
import responsabilidad from "../assets/caracteristicas/responsabilidad.png";
import creatividad from "../assets/caracteristicas/creatividad.png";

const Caracteristicas = () => {
  return (
    <div className='caracteristicas'>
        <div className='box'>
            <img src={versatilidad} alt="icono" />
            <h2 className='titulo'>Verstilidad</h2>
            <p className='descripcion'>Contamos con la capacidad de adaptarnos a las necesidades y requerimientos de nuestros clientes.</p>
        </div>
        <div className='box'>
            <img src={responsabilidad} alt="icono" />
            <h2 className='titulo'>Responsabilidad</h2>
            <p className='descripcion'>Comprometidos con la gestion eficiente del tiempo y los recursos priorizando siempre tus objetivos.</p>
        </div>
        <div className='box'>
            <img src={creatividad} alt="icono" />
            <h2 className='titulo'>Creatividad</h2>
            <p className='descripcion'>Creamos estrategias innovadoras y efectivas para destacar y atraer la atención de tu público.</p>
        </div>
    </div>
  )
}

export default Caracteristicas