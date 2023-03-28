import React from 'react'
import { useState } from 'react'
import noimage from "../img/noimage.png"
import fav from "../img/fav.svg"
import nofav from "../img/nofav.svg"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Paginate = ({datos}) => {

    const [personajes,setPersonajes] = useState(datos)
    personajes.map(personaje => {
      personaje.favorito = nofav
    })

    /* const [buscar, setBuscar] = useState("") */
    
    const localStorageId = "favoritos"
    const favoritos = []
    const itemsPorPagina = 21
    const [items, setitems] = useState([...personajes].splice(0,itemsPorPagina))
    const [paginaActual, setpaginaActual] = useState(0)
    
    const paginaAnterior = () => {
        const prevPage = paginaActual - 1
        const primerIndex = prevPage * itemsPorPagina
        if (prevPage < 0 ){
            return
        }else{
            setitems([...personajes].splice(primerIndex,itemsPorPagina))
            setpaginaActual(prevPage)
        }
    }

    const paginaSiguiente = () => {
        const totalElementos = personajes.length
        const nextPage = paginaActual + 1
        const primerIndex = nextPage * itemsPorPagina

        if (primerIndex >= totalElementos){
            return
        }else{
            setitems([...personajes].splice(primerIndex,itemsPorPagina))
            setpaginaActual(nextPage)
        }
    }

    /* const buscarPersonaje = (e) => {
      setBuscar(e.target.value)

    } */

    /* const resultado = ! buscar 
    ? items 
    : items.filter((dato) => {dato.name.toLowerCase().includes(buscar.toLocaleLowerCase())})  */

    


    // crear funcion que valide si esta en favoritos o no (no vale con map)
    const añadirFav = (e,personaje) => {
      // Comprobar si está en favoritos => const flagIsFav = isFavorito (personaje)
   
      // if (flagIsFav)  ----------elimna
      // else --- añadir


      if( favoritos.map((o) => o.name).indexOf(personaje.name) >= 0){
        personaje.favorito = nofav
        const posicion = favoritos.map((o) => o.name).indexOf(personaje.name)
        favoritos.splice(posicion,1)
      }else{
        personaje.favorito = fav
        favoritos.push(personaje)
      }
      console.log(favoritos)
      window.localStorage.setItem(localStorageId, JSON.stringify(favoritos))
    }

    console.log("render")
    return (
    <>
        {!items ? '' : 
          items.map( (item,index) => {
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
            <a className='icono_fav' onClick={(e)=>añadirFav(e,item)}>
              <img src={favorito} width="30 px"/>
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