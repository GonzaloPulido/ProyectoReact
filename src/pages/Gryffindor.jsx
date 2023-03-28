import React from 'react'
import Galeria from '../components/Galeria'


const Gryffindor = () => {
  return (
    <div>
        <main>
            <h1 className="titulo">Gryffindor</h1>
            <section className="padre_listados">   
            {
              <Galeria url='https://hp-api.onrender.com/api/characters/house/gryffindor'/>
            }
            </section>
        </main>
    </div>
  )
}

export default Gryffindor