import empretienda from "../assets/LogosCarusel/et.png";
import googleadds from "../assets/LogosCarusel/ga.png";
import jimdo from "../assets/LogosCarusel/jd.png";
import mercadolibre from "../assets/LogosCarusel/ml.png";
import tiendanube from "../assets/LogosCarusel/tn.png";
import tiendup from "../assets/LogosCarusel/tu.png";

const LogosPlataformas = () => {
  return (
    <div className='logos'>
        <div className='logos-slide'>
            <img src={empretienda} alt="logo empretienda" />
            <img src={googleadds} alt="logo google ads" />
            <img src={jimdo} alt="logo jimdo" />
            <img src={mercadolibre} alt="logo mercado libre" />
            <img src={tiendanube} alt="logo tiendanube" />
            <img src={tiendup} alt="logo tiendup" />
        </div>
        <div className='logos-slide'>
            <img src={empretienda} alt="logo empretienda" />
            <img src={googleadds} alt="logo google ads" />
            <img src={jimdo} alt="logo jimdo" />
            <img src={mercadolibre} alt="logo mercado libre" />
            <img src={tiendanube} alt="logo tiendanube" />
            <img src={tiendup} alt="logo tiendup" />
        </div>
    </div>
  )
}

export default LogosPlataformas