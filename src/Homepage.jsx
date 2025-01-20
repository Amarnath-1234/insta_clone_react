import React from 'react'
import './homepage.css'
import Navbar from './navbar/Navbar'
import Post from './post/Post'

function Homepage() {
  return (
    <div className='homepage'>
      <div className="home_navbar">
        <Navbar/>
      </div>
      <div className="home_post">
        <Post/>
      </div>
    </div>
  )
}

export default Homepage
