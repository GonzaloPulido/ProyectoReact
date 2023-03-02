import React from 'react'
import { NavLink } from 'react-router-dom'

const Perfil = () => {
  const datos = JSON.parse(localStorage.getItem("usuariosRegistrados"))
  

  return (
    <div>
      <main>
        <section>
            <h1 className="titulo">Perfil</h1>
            <article className='perfil_container'>
              <div className='perfil1'>
                <img />
                <NavLink id="boton_inicio">Favoritos</NavLink>
              </div>
              <div className='perfil2'>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </article>
        </section>
      </main>
    </div>
  )
}

export default Perfil