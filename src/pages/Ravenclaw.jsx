import React from 'react'
import Galeria from '../components/Galeria'

const Ravenclaw = () => {
  return (
    <div>
        <main>
            <h1 className="titulo">Ravenclaw</h1>
            <section className="padre_listados">   
            {
              <Galeria url='https://hp-api.onrender.com/api/characters/house/ravenclaw'/>
            }
            </section>
        </main>
    </div>
  )
}

export default Ravenclaw