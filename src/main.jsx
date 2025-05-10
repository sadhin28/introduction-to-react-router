import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
 
const router = createBrowserRouter([
  {
    path:'/',
    element :<Home></Home>
  },
  {
    path:'/about',
    element: <div>I am in the about page</div>

  },
  {
    path:'contact',
    element: <div>Contact Us</div>
  },
  {
    Path: ''
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
