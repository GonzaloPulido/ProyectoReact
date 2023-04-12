import React from 'react'
import Galeria from '../components/Galeria'

const Personajes = () => {
  

  return (
    
    <div>
        <main>
            <h1 className="titulo">Todos los personajes</h1>
            <section className="padre_listados">  
            
                <Galeria url='https://hp-api.onrender.com/api/characters'/> 
            </section>
        </main>
    </div>
  )
}

export default Personajes