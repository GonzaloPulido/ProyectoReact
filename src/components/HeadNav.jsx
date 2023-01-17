import React from 'react'
import { NavLink } from 'react-router-dom'
import hogwarts from "../img/hogwarts.png"

const HeadNav = () => {
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
            <li className="iconos"><i className="fas fa-search"></i></li>
            <li className="iconos"><i className="fas fa-user-circle"></i></li>
        </ul>
    </header>
    </div>
  )
}

export default HeadNav
