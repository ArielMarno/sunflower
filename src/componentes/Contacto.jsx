import '../estilos/contacto.css';
const Contacto = () => {
  return (
        <div className="contacto" id="contacto">
            <aside>
                <h3>¡Contanos sobre tu proyecto!</h3>
                <p>¿Cómo te gustaría que trabajemos juntos?<br /></p>
            </aside>
            <form  target="_blank" action="https://formsubmit.co/agenciadigital.sunflower@gmail.com" method="POST">
                <div className="inputs">
                    <div>
                        <label htmlFor="name">Nombre:</label><br />
                        <input type="text" id="name" name="name" placeholder="Nombre" required />
                    </div>
                    <div>
                        <label htmlFor="phone">Teléfono:</label><br />
                        <input type="number" id="phone" name="phone" placeholder="Teléfono" required/>
                    </div>
                </div>
                
                <div className="inputs">
                    <div>
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" name="email" placeholder="Email" required/>
                    </div>
                    <div>
                        <label htmlFor="company">Empresa:</label><br />
                        <input type="text" id="company" name="company" placeholder="Empresa"required/>
                    </div>
                </div>
            <div className="msj-box">
                <label htmlFor="message">Mensaje:</label><br />
                <textarea id="message" name="message" placeholder="Mensaje"></textarea><br />
                <input type="submit" value="Enviar" className="btn-form" />
            </div>
        </form>
    </div>
  );
}

export default Contacto;
