import React, { useContext } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import hogwarts from "../img/hogwarts.png"
import { useUserContext } from '../context/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import registerIcon from '../img/registrarse.svg';

const HeadNav = () => {
    const {user, setUser} = useUserContext()
    const navigate = useNavigate()

    const cerrarSesion = () => {

        localStorage.removeItem("logedUser");
        setUser(false)
        navigate("/")
    
      }
  return (
    <div>
        <header>
            <NavLink to='/'><img src={hogwarts} className="logo" alt="Logo de hogwarts"/></NavLink>
            <nav className='nav_header'>
                <ul className='apartados_head'>
                    <li><NavLink to='/personajes'>Todos los personajes</NavLink></li>
                    <li><NavLink to='/estudiantes'>Estudiantes</NavLink></li>
                    <li><NavLink to='/trabajadores'>Trabajadores</NavLink></li>
                    <li><NavLink to='/casas'>Casas</NavLink></li>
                </ul>
            </nav>
            <ul className="iconos_head">
            <li className="iconos">
                <div className="respmenu">
                    <input type="checkbox"/>
                    <i className="fas fa-bars iconos"></i>
                    <i className="fas fa-times iconos"></i>
                    <nav className="hamburguesa">
                        <ul>
                            <li><NavLink to='/personajes'>Personajes</NavLink></li>
                            <li><NavLink to='/estudiantes'>Estudiantes</NavLink></li>
                            <li><NavLink to='/trabajadores'>Trabajadores</NavLink></li>
                            <li><NavLink to='/casas'>Casas</NavLink></li>
                            <li><a href="https://www.aepd.es/es/politica-de-privacidad-y-aviso-legal">Politica de privacidad</a></li>
                            <li><a href="https://www.aepd.es/es/politica-de-privacidad-y-aviso-legal">Aviso legal</a></li>
                            <li><NavLink to='/error'>Cookies</NavLink></li>
                            <li><NavLink to='/contactanos'>Contactanos</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </li>
            {user && (
                <li className="iconos"><NavLink to="/perfil"><i className="fas fa-user-circle"></i></NavLink></li>
            )}
            {user || (
               <li className="iconos"><NavLink to="/login">Login{/* <i className="fa-solid fa-right-to-bracket"></i> */}</NavLink></li>
            )}
            {user ? (
                <li className="iconos"><button onClick={cerrarSesion}>Hola</button></li>
            ) : (
                <li className="iconos"><NavLink to="/register">Register{/* <img src={registerIcon} className='iconos_header'/> */}</NavLink></li>
            )}
           
        </ul>
    </header>
    </div>
  )
}

export default HeadNav
