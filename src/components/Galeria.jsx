import React, { Suspense, lazy } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import noimage from '../img/noimage.png'
import fav from '../img/fav.svg'
import nofav from '../img/nofav.svg'
import BotonTop from './BotonTop'
import { faV } from '@fortawesome/free-solid-svg-icons'

const Galeria = ({ url }) => {
  // Elegir entre lazy load o paginate (que no rendericen la pagina¡¡¡¡¡)
  const [characters, setCharacters] = useState([])
  const [showLoading, setShowLoading] = useState(false)
  const [visibleCount, setVisibleCount] = useState(21)
  const [loading, setLoading] = useState(false)
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (personaje) => {
    const updatedFavorites = [...favorites, {...personaje, favorito: fav}]
    setFavorites(updatedFavorites)
    console.log(favorites)
  };
  
  
  const removeFromFavorites = (personaje) => {
    personaje.favorito = nofav;
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== personaje.id); // crea una nueva copia de la lista sin el personaje eliminado
    setFavorites(updatedFavorites); // actualiza la lista de favoritos
    console.log(favorites)
  };
  

  useEffect(() => {
    const llamarApi = async () => {
      const respuesta = await fetch(url)
      const charData = await respuesta.json()
      if (charData != 'undefined') {
        setCharacters(charData)
      }
    }
    llamarApi()
  }, [])

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      setShowLoading(true)
      setLoading(true)
      setTimeout(() => {
        setVisibleCount(visibleCount + 21)
        setLoading(false)
        setShowLoading(false)
      }, 800)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [visibleCount])

  return (
    <>
      {characters.slice(0, visibleCount).map((item) => {
        item.favorito = favorites.find(favorite => favorite.id === item.id) ? fav : nofav
        let {id,name,image,favorito} = item
        if(image === ""){
          image = noimage
        }
        return (
          <article className='elemento' key={id}>
            <div className='div_imagen'>
              <img src={image} className="foto" alt={name}></img>
            </div>
            <div className='titulos'>
              <h2 className='titulo_elemento'>{name}</h2>
            </div>
            <div className="icono_fav"
              onClick={favorites.find(favorite => favorite.id === item.id) ? () => removeFromFavorites(item) : () => addToFavorites(item)}>
              <img src={favorito} width="30 px" className='iconoFav'/>
            </div>
            <NavLink to="/personaje" state={{ item:item}} className="button">Ver más</NavLink>
          </article>
        )
      })}
      {showLoading && <h1 className='titulo'>Cargando...</h1>}
      <BotonTop></BotonTop>
    </>
  )
}

export default Galeria
