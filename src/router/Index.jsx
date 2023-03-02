import { createBrowserRouter } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Error from '../pages/Error'
import Personajes from '../pages/Personajes'
import InicioLay from '../layouts/InicioLay'
import Estudiantes from '../pages/Estudiantes'
import Trabajadores from '../pages/Trabajadores'
import Casas from '../pages/Casas'
import Gryffindor from '../pages/Gryffindor'
import Ravenclaw from '../pages/Ravenclaw'
import Slytherin from '../pages/Slytherin'
import Hufflepuff from '../pages/Hufflepuff'
import Personaje from '../pages/Personaje'
import Contactanos from '../pages/Contactanos'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Perfil from '../pages/Perfil'

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
        path: '/gryffindor',
        element: <Gryffindor />,
      },
      {
        path: '/hufflepuff',
        element: <Hufflepuff />,
      },
      {
        path: '/ravenclaw',
        element: <Ravenclaw />,
      },
      {
        path: '/slytherin',
        element: <Slytherin />,
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
      

    ],
  },
])