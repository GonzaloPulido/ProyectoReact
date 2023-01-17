import React from 'react'
import varita from "../img/varita_harry.png"

const Contactanos = () => {
  return (
    <div>
        <main>
    <section>
        <h1 className="titulo">Contactanos</h1>
        <article className="contactos_padre">
            <div className="elemento_contactos">
                <ul className="lista_info">
                    <li><i className="fas fa-phone-volume"></i>691 28 01 24</li>
                    <li><i className="fas fa-envelope"></i>harrypotter@gmail.com</li>
                    <li><i className="fas fa-map-marker-alt"></i>Calle Angosto 99,23500</li>
                </ul>
                <p className="titulo_redes">Redes sociales</p>
                <ul className="lista_iconos_contacto">
                    <li className="redes"><i className="fab fa-facebook-f"></i></li>
                    <li className="redes"><i className="fab fa-twitter"></i></li>
                    <li className="redes"><i className="fab fa-instagram"></i></li>
                </ul>
            </div>
            <img src={varita} className="varita_contacto" alt="Imagen de la varita de Harry Potter"/>
            <form className="form_contactos">
                <label for="nombre_completo">Nombre completo
                    <input type="text" id="nombre_completo" name="nombre_completo" required/>
                </label>
                <label for="correo_electronico">Correo electronico
                    <input type="text" id="correo_electronico" name="correo_electronico" required/>
                </label>
                <label for="mensaje">Mensaje
                    <textarea id="mensaje" rows="5" cols="20" name="mensaje"></textarea>
                </label>
                <label for="enviar">
                    <input type="submit"  value="Enviar" id="enviar"/>
                </label>
            </form>
        </article>
    </section>
</main>
    </div>
  )
}

export default Contactanos