import React, {Suspense, lazy} from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import noimage from "../img/noimage.png"
import fav from "../img/fav.svg"
import nofav from "../img/nofav.svg"
import BotonTop from "./BotonTop"



const Galeria = ({url}) => {
    // Elegir entre lazy load o paginate (que no rendericen la pagina¡¡¡¡¡)
    const [characters , setCharacters] = useState([])

    const [showFooter, setShowFooter] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(21);
    const [loading, setLoading] = useState(false);

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
        setShowLoading(true);
        setLoading(true);
        setTimeout(() => {
          setVisibleCount(visibleCount + 21);
          setLoading(false);
          setShowLoading(false);
        }, 800);
      }
    };
    

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    
      return () => window.removeEventListener("scroll", handleScroll);
    }, [visibleCount]);
    

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
      {characters.slice(0, visibleCount).map((item) => {
        item.favorito = nofav
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
      <a className='icono_fav' onClick={(e)=>añadirFav(e,item)} >
        <img src={favorito} width="30 px"/>
      </a>

      <NavLink to="/personaje" state={{ item:item}} className="button">Ver más</NavLink>
    </article>
      
  })}
  {showLoading && <h1 className='titulo'>Cargando...</h1>}
  <BotonTop></BotonTop>
  


    </>
  )
}

export default Galeria