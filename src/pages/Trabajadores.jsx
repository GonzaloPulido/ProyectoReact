import React from 'react'
import Galeria from '../components/Galeria'


const Trabajadores = () => {
  return (
    <div>
        <main>
            <h1 className="titulo">Trabajadores</h1>
            <section className="padre_listados">   
            {
              <Galeria url='https://hp-api.onrender.com/api/characters/staff'/>
            }
            </section>
        </main>
    </div>
  )
}

export default Trabajadores