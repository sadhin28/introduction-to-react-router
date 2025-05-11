import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Notfound from './Components/Notfound/Notfound';
import Contact from './Components/Contact/Contact';
import User from './Components/User/User';
import UserDataCard from './Components/UsersDataCard/UserDataCard';
import UserDetails from './Components/UserDetails/userDetails';
import Posts from './Components/Posts/Posts';
import Postdetails from './Components/Postdetails/Postdetails';
import Post from './Components/Post/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path : '/user',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      },
      {
        path:'/UserData/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/datas/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<Postdetails></Postdetails>
      }
    ]


  },

  {
    path: '*',
    element: <Notfound></Notfound>
  }
]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
