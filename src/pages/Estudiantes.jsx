import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Paginate from '../components/Paginate'

const Estudiantes = () => {

  const url = 'https://hp-api.onrender.com/api/characters/students'

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
            <h1 className="titulo">Estudiantes</h1>
            <section className="padre_listados">   
            {
              !characters ? <h1 className='titulo'>Cargando ...</h1> : <Paginate datos={characters}/>
            }
            </section>
        </main>
    </div>
  )
}

export default Estudiantes