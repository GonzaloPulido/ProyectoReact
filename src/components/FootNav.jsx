import React from 'react'
import { NavLink } from 'react-router-dom'
import hogwarts from "../img/hogwarts.png"

const FootNav = () => {
  return (
    <div>
        <footer>
            <a href="index.html"><img src={hogwarts} className="logo" alt="Logo de hogwarts"/></a>
            <nav className="nav_footer">
                <ul className="apartados_foot">
                    <li className="enlaces_foot"><a href="https://www.aepd.es/es/politica-de-privacidad-y-aviso-legal">Politica de privacidad</a></li>
                    <li><a href="https://www.aepd.es/es/politica-de-privacidad-y-aviso-legal">Aviso legal</a></li>
                    <li><NavLink to='/error'>Cookies</NavLink></li>
                    <li><NavLink to='/contactanos'>Contactanos</NavLink></li>
                </ul>
            </nav>
            <ul className="iconos_foot">
                <li className="iconos"><i className="fab fa-facebook-f"></i></li>
                <li className="iconos"><i className="fab fa-twitter"></i></li>
                <li className="iconos"><i className="fab fa-instagram"></i></li>
            </ul>
        </footer>
    </div>
  )
}

export default FootNav