import React from 'react'
import Galeria from '../components/Galeria'


const Estudiantes = () => {
  return (
    <div>
        <main>
            <h1 className="titulo">Estudiantes</h1>
            <section className="padre_listados">   
            {
              <Galeria url='https://hp-api.onrender.com/api/characters/students'/>
            }
            </section>
        </main>
    </div>
  )
}

export default Estudiantes