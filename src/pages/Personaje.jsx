import React from 'react'
import { useLocation } from 'react-router-dom';
import noimage from "../img/noimage.png"

const Personaje = (props) => {

    const location= useLocation()
    const {state} = location
  return (
    <div>
        <main>
            <section>
                <h1 className="titulo">{state.item.name}</h1>
                <article className="elementos_personaje">
                    <div className="div_personaje">
                    {
                        !state.item.image ? <img src={noimage}/> : <img src={state.item.image} className="foto" alt={state.item.name}></img>
                    }
                    
                    </div>
                    <ul>
                        <li className="lista1_personaje">Nombre:<p>{state.item.name}</p></li>
                        <li className="lista1_personaje">Fecha de nacimiento:<p>{state.item.dateOfBirth}</p></li>
                        <li className="lista1_personaje">Genero:<p>{state.item.gender}</p></li>
                        <li className="lista1_personaje">Color de ojos:<p>{state.item.eyeColour}</p></li>
                        <li className="lista1_personaje">Color de pelo:<p>{state.item.hairColour}</p></li>
                    </ul>
                    <ul>
                        <li className="lista1_personaje">Especie:<p>{state.item.species}</p></li>
                        <li className="lista1_personaje">Casa:<p>{state.item.house}</p></li>
                        <li className="lista1_personaje">Mago:
                        {
                            !state.item.wizard ? <p>No</p> : <p>Yes</p>
                        }
                        </li>
                        <li className="lista1_personaje">Ascendencia:<p>{state.item.ancestry}</p></li>
                        <li className="lista1_personaje">Actor:<p>{state.item.actor}</p></li>
                    </ul>
                    <ul>
                        <li className="lista1_personaje">Varita:
                            <ul>
                                <li className="lista1_personaje">Madera:<p>{state.item.wand.wood}</p></li>
                                <li className="lista1_personaje">Centro:<p>{state.item.wand.core}</p></li>
                                <li className="lista1_personaje">Longitud:<p>{state.item.wand.length}</p></li>
                            </ul>
                        </li>
                        <li className="lista1_personaje">Patronus:<p>{state.item.patronus}</p></li>
                        <li className="lista1_personaje">Vivo:
                        {
                            !state.item.patronus ? <p>No</p> : <p>Yes</p>
                        }
                        </li>
                    </ul>
                </article>
            </section>
        </main>
    </div>
  )
}

export default Personaje


