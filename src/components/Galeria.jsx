import React, {Suspense, lazy} from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import noimage from "../img/noimage.png"
import fav from "../img/fav.svg"
import nofav from "../img/nofav.svg"
import InfiniteScroll from 'react-infinite-scroll-component';



const Galeria = ({url}) => {
    // Elegir entre lazy load o paginate (que no rendericen la pagina¡¡¡¡¡)
    const [characters , setCharacters] = useState([])
    const [page, setPage] = useState(1);

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
    // El infinite scroll es de chatGPT, tengo que mirarlo aun porque no funciona
    // Buscar informacion sobre lazy load, lo veo mas sencillo que el paginate (importante que no renderice para solucionar 
    // el problema de los favoritos)
    // Hay tiempo de sobra, animo ¡¡¡
  return (
    <>
    <InfiniteScroll
      dataLength={characters.length}
      next={fetchCharacters}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more characters to show.</p>}
      scrollThreshold={0.8}
    >
      {!characters ? '' : 
          characters.map( (item,index) => {
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
            <a className='icono_fav' /* onClick={(e)=>añadirFav(e,item)} */>
              <img src={favorito} width="30 px"/>
            </a>

            <NavLink to="/personaje" state={{ item:item}} className="button">Ver más</NavLink>
          </article>
        })
        } 

    </InfiniteScroll>
    

       
    </>
  )
}

export default Galeria