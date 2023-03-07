import React from 'react'

const Personaje = (props) => {
  const {image,name,dateOfBirth,gender,eyeColour,hairColour,species,house,
    wizard,ancestry,actor,wand,patronus,alive} = props
  
  return (
    <div>
        <main>
            <section>
                <h1 className="titulo">Harry Potter</h1>
                <article className="elementos_personaje">
                    <div className="div_personaje">
                    <img src={image} className="foto" alt={name}></img>
                    </div>
                    <ul>
                        <li className="lista1_personaje">Nombre:<p>{name}</p></li>
                        <li className="lista1_personaje">Fecha de nacimiento:<p>{dateOfBirth}</p></li>
                        <li className="lista1_personaje">Genero:<p>{gender}</p></li>
                        <li className="lista1_personaje">Color de ojos:<p>{eyeColour}</p></li>
                        <li className="lista1_personaje">Color de pelo:<p>{hairColour}</p></li>
                    </ul>
                    <ul>
                        <li className="lista1_personaje">Especie:<p>{species}</p></li>
                        <li className="lista1_personaje">Casa:<p>{house}</p></li>
                        <li className="lista1_personaje">Mago:<p>{wizard}</p></li>
                        <li className="lista1_personaje">Ascendencia:<p>{ancestry}</p></li>
                        <li className="lista1_personaje">Actor:<p>{actor}</p></li>
                    </ul>
                    <ul>
                        <li className="lista1_personaje">Varita:
                            <ul>
                                <li className="lista1_personaje">Madera:<p>{wand}</p></li>
                                <li className="lista1_personaje">Centro:<p>{wand}</p></li>
                                <li className="lista1_personaje">Longitud:<p>{wand}</p></li>
                            </ul>
                        </li>
                        <li className="lista1_personaje">Patronus:<p>{patronus}</p></li>
                        <li className="lista1_personaje">Vivo:<p>{alive}</p></li>
                    </ul>
                </article>
            </section>
        </main>
    </div>
  )
}

export default Personaje


