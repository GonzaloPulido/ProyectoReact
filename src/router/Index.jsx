import { createBrowserRouter } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Error from '../pages/Error'
import Personajes from '../pages/Personajes'
import InicioLay from '../layouts/InicioLay'
import Estudiantes from '../pages/Estudiantes'
import Trabajadores from '../pages/Trabajadores'
import Casas from '../pages/Casas'
import Personaje from '../pages/Personaje'
import Contactanos from '../pages/Contactanos'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Perfil from '../pages/Perfil'
import Favoritos from '../pages/Favoritos'
import Casa from '../pages/Casa'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <InicioLay/>,
    errorElement: <Error/>,
    children: [
      {
        // path: '/',
        index: true,
        element: <Inicio />,
      },
      {
        path: '/personajes',
        element: <Personajes />,
      },
      {
        path: '/estudiantes',
        element: <Estudiantes />,
      },
      {
        path: '/trabajadores',
        element: <Trabajadores />,
      },
      {
        path: '/casas',
        element: <Casas />,
      },
      {
        path: '/personaje',
        element: <Personaje />,
      },
      {
        path: '/contactanos',
        element: <Contactanos />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/perfil',
        element: <Perfil />,
      },
      {
        path: '/favoritos',
        element: <Favoritos />,
      },
      {
        path: '/casa',
        element: <Casa />,
      },

    ],
  },
])