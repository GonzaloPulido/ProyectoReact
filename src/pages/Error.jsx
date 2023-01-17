import React from 'react'
import { useRouteError, NavLink } from 'react-router-dom'
import snitch from "../img/snitch.png"
import  HeadNav from '../components/HeadNav'
import  FootNav from '../components/FootNav'

const Error = () => {
    const error = useRouteError()
  return (
    <div>
      <HeadNav/>
      <main>
        <h1 class="titulo">Error 404</h1>
        <section>
        <img className="snitch"  src={snitch} alt="Imagen de una snitch"/>
        </section>
        <div className='diverror'>
          <NavLink to='/' id='botonerror'>Volver al inicio</NavLink>
        </div>
      </main>
      <FootNav/>
      
    </div>
  )
}

export default Error