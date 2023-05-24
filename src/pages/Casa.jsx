import React from 'react'
import { useLocation} from 'react-router-dom'
import Galeria from '../components/Galeria'

const Casa = () => {
  const location= useLocation()
  const {state} = location
  const casa = state.casa
  const casaTitulo = casa.charAt(0).toUpperCase() + casa.slice(1);
  const api = `https://hp-api.onrender.com/api/characters/house/${casa}`

  return (
    <div>
        <main>
            <h1 className="titulo">{casaTitulo}</h1>
            <section className="padre_listados">   
            {
              <Galeria url={api}/>
            }
            </section>
        </main>
    </div>
  )
}

export default Casa