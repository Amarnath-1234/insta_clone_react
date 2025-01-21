import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Homepage'
import Profile from './navbar/Profile'
import Post from './post/Post'

const App = () => {
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Homepage/>,
      children:[
        {
          path:'/',
          element:<Post/>
        },
        {
          path:'/profile',
          element:<Profile/>
        }
      ]
    }
  ])
  return <RouterProvider router={routes} />
}

export default App
