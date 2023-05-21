import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { router } from './router/Index'
import { RouterProvider } from 'react-router-dom'
import UserProvider from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <RouterProvider router={router}/>
  </UserProvider>
  
)
