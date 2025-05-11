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
import Notfound from './Components/Notfound/Notfound';

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
       },
       {
        path:'*',
        element:<Notfound></Notfound>
       }
    ]

  )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
