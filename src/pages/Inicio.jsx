import React from 'react'
import { NavLink } from 'react-router-dom'
import caratula from "../img/caratula.jpg"

const Inicio = () => {
  return (
    <div>
      <main>
        <section id="section_inicio">
          <article id="inicio">
              <img src={caratula} id="caratula" alt="Caratula de la primera pelicula de Harry Potter en la que aparecen"/>
              <p>¿Eres fan de la saga Harry Potter? ¿Te gustaria conocer mas sobre los personajes?
                  Esta es tu web, conoce los datos personales de los personajes, tambien características 
                  magicas e informacion sobre su varita, esto y mas aquí.
              </p>
              <NavLink to='/register' id="boton_inicio">Registrarse</NavLink>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Inicio