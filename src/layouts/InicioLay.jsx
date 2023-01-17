import React from 'react'
import { Outlet } from 'react-router-dom'
import  HeadNav from '../components/HeadNav'
import  FootNav from '../components/FootNav'

const InicioLay = () => {
  return (
    <div>
      <HeadNav/>
      <Outlet/>
      <FootNav/>
    </div>
  )
}

export default InicioLay