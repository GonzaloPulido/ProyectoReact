import React from 'react'
import Galeria from '../components/Galeria'


const Hufflepuff = () => {
  return (

    <div>
        <main>
            <h1 className="titulo">Hufflepuff</h1>
            <section className="padre_listados">   
            {
              <Galeria url='https://hp-api.onrender.com/api/characters/house/hufflepuff'/>
            }
            </section>
        </main>
    </div>
  )
}

export default Hufflepuff