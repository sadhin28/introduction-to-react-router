import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';

const router = createBrowserRouter([
       {
        path:'/',
        element:<Header></Header>
       
       },
       {
        path:'/home',
        element:<Home></Home>
       },
       {
        path:'/about',
        element:<About></About>
       }
    ]

  )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
