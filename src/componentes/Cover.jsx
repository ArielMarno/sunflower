import cover from "../assets/cover.jpg";

const Cover = () => {
  return (
    <div>
        <div className='cover'>
            <img src={cover} alt="escritorio" />
            <div className="text-box">
                    <h2>Somos <span className="cover-text">SunFlower</span>, <br />
                    la mejor opcion
                    para potenciar tu negocio.</h2>
                    <button type="button" class="btn btn-outline-warning">Envianos tu mensaje</button>
            </div>
        </div>
    </div>
  )
}

export default Cover