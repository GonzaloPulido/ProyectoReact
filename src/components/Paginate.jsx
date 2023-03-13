import React from 'react'
import { useState } from 'react'
import noimage from "../img/noimage.png"
import fav from "../img/fav.svg"
import nofav from "../img/nofav.svg"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar, faV } from '@fortawesome/free-solid-svg-icons'; */

const Paginate = ({datos}) => {
    /* const [buscar, setBuscar] = useState("") */
    const localStorageId = "favoritos"
    const favoritos = []
    const itemsPorPagina = 21
    const [items, setitems] = useState([...datos].splice(0,itemsPorPagina))
    const [paginaActual, setpaginaActual] = useState(0)
    
    const paginaAnterior = () => {
        const prevPage = paginaActual - 1
        const primerIndex = prevPage * itemsPorPagina
        if (prevPage < 0 ){
            return
        }else{
            setitems([...datos].splice(primerIndex,itemsPorPagina))
            setpaginaActual(prevPage)
        }
    }

    const paginaSiguiente = () => {
        const totalElementos = datos.length
        const nextPage = paginaActual + 1
        const primerIndex = nextPage * itemsPorPagina

        if (primerIndex >= totalElementos){
            return
        }else{
            setitems([...datos].splice(primerIndex,itemsPorPagina))
            setpaginaActual(nextPage)
        }
    }

    /* const buscarPersonaje = (e) => {
      setBuscar(e.target.value)

    } */

    /* const resultado = ! buscar 
    ? items 
    : items.filter((dato) => {dato.name.toLowerCase().includes(buscar.toLocaleLowerCase())})  */

    // Para cambiar la estrella useEffect y useState
    
    const añadirFav = (e,personaje) => {
      // Comprobar si está en favoritos *
        // Si está => llamo a la función eliminar%-favorito *
            // quita la estrella y lo saca de favorito
        // No está => llamo a la función añadir*
          // pongo la estrella y lo añado
        
      if( favoritos.map((o) => o.name).indexOf(personaje.name) >= 0){
        e.target.src = nofav
        const posicion = favoritos.map((o) => o.name).indexOf(personaje.name)
        favoritos.splice(posicion,1)
      }else{
        e.target.src = fav
        favoritos.push(personaje)
      }
      console.log(favoritos)
      window.localStorage.setItem(localStorageId, JSON.stringify(favoritos))
    }

    return (
    <>
        {!items ? '' : 
          items.map( (item,index) => {
            let {id,name,image} = item
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
            <a className='icono_fav' onClick={(e)=>añadirFav(e,item)}>
              <img src={nofav} width="30 px"/>
            
            {/*   <FontAwesomeIcon icon={farStar} onClick={(e)=>añadirFav(e,item)}/> */}
              {/* {   
                favoritos.map((o) => o.name).indexOf(item.name) >= 0
                ? <FontAwesomeIcon icon={fasStar} onClick={()=>añadirFav(item)}/>
                : <FontAwesomeIcon icon={farStar} onClick={()=>añadirFav(item)}/>
              } */}
            
            </a>
            <NavLink to="/personaje" state={{ item:item}} className="button">Ver más</NavLink>
          </article>
        })
        }   
            
            <div className='paginatebtn'>
                <button onClick={paginaAnterior} className="singlebtn">Anterior</button>
                <button onClick={paginaSiguiente} className="singlebtn">Siguiente</button>
            </div>
    </>
  );
}

export default Paginate