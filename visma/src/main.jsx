import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './Styles/Reset.css'
import './Styles/Common.css'
import Landing from './MainPage/Landing.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import RequestClient from './ClientRequest/RequestClient.jsx'
import GetRequestClient from './GetRequestClient/GetRequestClient.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/landing"/>,
  },
  {
    path: '/landing',
    element: <Landing/>
  },
  {
    path:'/request+client',
    element: <RequestClient/>
  },
  {
    path:'/get+request+client',
    element: <GetRequestClient/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
