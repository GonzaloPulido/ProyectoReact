import React,{useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import perfil from "../img/perfil.png"
import { UserContext, useUserContext } from '../context/UserContext'
import { set } from 'react-hook-form'

const Perfil = () => {
  const {user, setUser} = useUserContext()
  const datos = JSON.parse(localStorage.getItem("logedUser"))
  const usuario = datos[0]
  const navigate = useNavigate()
  
  
  const cerrarSesion = () => {

    localStorage.removeItem("logedUser");
    setUser(false)
    navigate("/")

  }

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

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
                <p className='perfil2text'>Nombre: {usuario.nombre}</p>
                <p className='perfil2text'>Apellidos: {usuario.apellidos}</p>
                <p >Email: {usuario.email}</p>
              </div>
            </article>
            <button className='botonPerfil' onClick={cerrarSesion}>Cerrar sesion</button>
        </section>
      </main>
    </div>
  )
}

export default Perfil