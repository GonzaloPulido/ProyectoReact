import React,{useEffect,useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import noimage from '../img/noimage.png'
import fav from '../img/fav.svg'
import nofav from '../img/nofav.svg'
import BotonTop from '../components/BotonTop'
import { useUserContext } from "../context/UserContext"

const Favoritos = () => {
  // Pagina de favoritos de un usuario en concreto
  // Incluye la logica de infiniteScroll y la funcion de eliminar favoritos
  
  const {user, setUser} = useUserContext()
  const navigate = useNavigate()
  const [showLoading, setShowLoading] = useState(false)
  const [visibleCount, setVisibleCount] = useState(21)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  const logedUser = JSON.parse(localStorage.getItem('logedUser'))
  const email = logedUser[0].email
  const favoritesKey = `favoritos_${email}`
  const listaFavoritos = JSON.parse(localStorage.getItem(favoritesKey)) ? JSON.parse(localStorage.getItem(favoritesKey)) : []
  const [favoritos, setFavoritos] = useState(listaFavoritos)

  const removeFromFavorites = (e, personaje) => {
    personaje.favBool = false
    e.target.src = nofav
    const index = favoritos.findIndex((fav) => fav.id === personaje.id)
    if (index !== -1) {
      const updatedFavoritos = [...favoritos]
      updatedFavoritos.splice(index, 1)
      setFavoritos(updatedFavoritos)
      actualizarFavoritos()
    }
  }

  const actualizarFavoritos = () => {
    localStorage.setItem(favoritesKey, JSON.stringify(listaFavoritos))
  }

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

  const shouldShowTopButton = listaFavoritos.length > 21

  return (
    <>
      <main>
      <h1 className="titulo">Favoritos</h1>
        <section className='fav_listado'>
        {favoritos.slice(0, visibleCount).map((item) => {
          item.favBool = favoritos.some((fav) => fav.id === item.id)
          if(item.favBool){
            item.favorito = fav
          }else{
            item.favorito = nofav
          }
          let { id, name, image, favorito } = item
          if (image === "") {
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
              >
              <img src={favorito} width="30 px" className='iconoFav' onClick={(e) => removeFromFavorites(e,item)}/>
            </div>
            <NavLink to="/personaje" state={{ item:item}} className="button">Ver más</NavLink>
          </article>
        )
      })} 
      {showLoading && <h1 className='titulo'>Cargando...</h1>}
      {shouldShowTopButton && <BotonTop />}
        </section>
      </main>
    </>
  )
}

export default Favoritos