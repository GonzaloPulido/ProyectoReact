import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import { router } from './router/Index'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
