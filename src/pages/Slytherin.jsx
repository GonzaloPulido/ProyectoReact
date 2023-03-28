import React from 'react'
import Galeria from '../components/Galeria'


const Slytherin = () => {
  return (
    <div>
        <main>
            <h1 className="titulo">Slytherin</h1>
            <section className="padre_listados">   
            {
              <Galeria url='https://hp-api.onrender.com/api/characters/house/slytherin'
              />
            }
            </section>
        </main>
    </div>
  )
}

export default Slytherin