import React from 'react'
import { NavLink } from 'react-router-dom'
import gryffindor from "../img/logo_gryffindor.png"
import hufflepuff from "../img/logo_hufflepuff.png"
import ravenclaw from "../img/logo_ravenclaw.png"
import slytherin from "../img/logo_slytherin.png"


const Casas = () => {
  return (
    <div>
    <main>
    <h1 className="titulo">Casas</h1>
    <section className="section_casas">
        <article className="casas">
            <div className="container_casa">
            <NavLink to='/casa' state={{ casa:'gryffindor'}}><img src={gryffindor} className="logo_casas" alt="Logo Gryffindor"/></NavLink>
            <h2 className="titulo_casa">GRYFFINDOR</h2>
            </div>
            <div className="container_casa">
            <NavLink to='/casa' state={{ casa:'ravenclaw'}}><img src={ravenclaw} className="logo_casas" alt="Logo Ravenclaw"/></NavLink>
                <h2 className="titulo_casa">RAVENCLAW</h2>
            </div>
            <div className="container_casa">
            <NavLink to='/casa' state={{ casa:'hufflepuff'}}><img src={hufflepuff} className="logo_casas" alt="Logo Hufflepuff"/></NavLink>
                <h2 className="titulo_casa">HUFFLEPUFF</h2>
            </div>
            <div className="container_casa">
            <NavLink to='/casa' state={{ casa:'slytherin'}}><img src={slytherin} className="logo_casas" alt="Logo Slytherin"/></NavLink>
                <h2 className="titulo_casa">SLYTHERIN</h2>
            </div>
        </article>
    </section>
    </main>
    </div>
  )
}

export default Casas