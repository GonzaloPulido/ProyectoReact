/* import buscar from '../components/Paginate'
import buscarPersonaje from '../components/Paginate' */
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Paginate from '../components/Paginate'

const Personajes = () => {

  const url = 'https://hp-api.onrender.com/api/characters'

  const [characters , setCharacters] = useState()

    
  
  useEffect(()=>{
    const llamarApi = async () => {
      const respuesta = await fetch(url)
      const charData = await respuesta.json()
      if (charData !="undefined"){
        setCharacters(charData)
      }
  }
  llamarApi()
},[])

  /* --------- Paginate --------- */
  
  

  return (

    // Controlar la respuesta  UseCallback, y usar operador ternario para controlar todo el HTML if ... pagina / Cargando...
    
    <div>
        <main>
            <h1 className="titulo">Todos los personajes</h1>
            {/* <input value={buscar} onChange={buscarPersonaje} type="text" placeholder='Buscar personaje'/> */}
            <section className="padre_listados">   
            {
              !characters ? <h1 className='titulo'>Cargando ...</h1> : <Paginate datos={characters}/>
            }
            </section>
        </main>
    </div>
  )
}

export default Personajes