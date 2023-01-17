import React from 'react'

const Personaje = (props) => {
  const id = props.key
  console.log(id)
  return (
    <div>
        <main>
            <section>
                <h1 className="titulo">Harry Potter</h1>
                <article className="elementos_personaje">
                    <div className="div_personaje">
                        
                    </div>
                </article>
            </section>
        </main>
    </div>
  )
}

export default Personaje


