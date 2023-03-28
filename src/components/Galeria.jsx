import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import noimage from "../img/noimage.png"

const Galeria = ({url}) => {
    // Cambiar nombre a data para que sea mas general
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

  return (
    <>
    
    {!characters ? '' : 
          characters.map( (item,index) => {
            let {id,name,image,favorito} = item
            if(image === ""){
              image = noimage
            }
          return <article className='elemento' key={id}>
              <div className='div_imagen'>
                <img src={image} className="foto" alt={name}></img>
              </div>
            <div className='titulos'>
              <h2 className='titulo_elemento'>{name}</h2>
            </div>
            <a className='icono_fav' /* onClick={(e)=>añadirFav(e,item)} */>
              <img src={favorito} width="30 px"/>
            </a>

            <NavLink to="/personaje" state={{ item:item}} className="button">Ver más</NavLink>
          </article>
        })
        } 
    </>
  )
}

export default Galeria