import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='mx-auto max-w-screen-xl'>
     <RouterProvider router={router} />
     </div>
  </React.StrictMode>,
)
