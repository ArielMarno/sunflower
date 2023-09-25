const Contacto = () => {
  return (
        <div className="contacto" id="contacto">
            <aside>
                <h3>¡Contanos sobre tu proyecto!</h3>
                <p>¿Como te gustaria que trabajemos juntos?<br /></p>
            </aside>
            <form action="https://formsubmit.co/agenciadigital.sunflower@gmail.com" method="POST">
                <div className="inputs">
                    <div>
                        <label htmlFor="name">Nombre:</label><br />
                        <input type="text" id="name" name="name" placeholder="Nombre" />
                    </div>
                    <div>
                        <label htmlFor="phone">Teléfono:</label><br />
                        <input type="number" id="phone" name="phone" placeholder="Teléfono" />
                    </div>
                </div>
                
                <div className="inputs">
                    <div>
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </div>
                    <div>
                        <label htmlFor="company">Empresa:</label><br />
                        <input type="text" id="company" name="company" placeholder="Empresa" />
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
