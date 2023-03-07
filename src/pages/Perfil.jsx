import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import perfil from "../img/perfil.png"

const Perfil = () => {
  const datos = JSON.parse(localStorage.getItem("logedUser"))
  const user = datos[0][0]
  const navigate = useNavigate()
  
  
  const cerrarSesion = () => {

    localStorage.removeItem("logedUser");
    console.log(datos)
    navigate("/")

  }

  return (
    <div>
      <main>
        <section className='perfilSect'>
            <h1 className="titulo">Perfil</h1>
            <article className='perfil_container'>
              <div className='perfil1'>
                <img src={perfil} className="foto_perfil"/>
                <NavLink id="boton_inicio" to="/favoritos">Favoritos</NavLink>
              </div>
              <div className='perfil2'>
                <p className='perfil2text'>Nombre: {user.nombre}</p>
                <p className='perfil2text'>Apellidos: {user.apellidos}</p>
                <p >Email: {user.email}</p>
              </div>
            </article>
            <button id="boton_inicio" className='botonPerfil' onClick={cerrarSesion}>Cerrar sesion</button>
        </section>
      </main>
    </div>
  )
}

export default Perfil