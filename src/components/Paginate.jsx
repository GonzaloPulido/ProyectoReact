import React from 'react'
import { useState } from 'react'
import noimage from "../img/noimage.png"
import { NavLink } from 'react-router-dom'

const Paginate = ({datos}) => {
    
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
            <NavLink to="/personaje" className="button">Ver más</NavLink>
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