import React from 'react'
import './navbar.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <img className='navbar_logo n_logo' src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="" />
        <div className='insta_logo'>
        <InstagramIcon/>
        </div>
        
        

      <div className="nav_buttons">
      <Link to='/'><button className="nav_btn">
        <HomeIcon className='icon'/>
            <span>Home</span>
        </button></Link>
        <button className="nav_btn">
            <SearchIcon className='icon'/>
            <span>Search</span>
        </button>
        <button className="nav_btn">
            <ExploreIcon className='icon'/>
            <span>Explore</span>
        </button>
        <button className="nav_btn">
            <SlideshowIcon className='icon'/>
            <span>Reels</span>
        </button>
        <button className="nav_btn msg_btn">
            <ChatIcon className='icon'/><sup>1</sup>
            <span>Messages</span>
        </button>
        <button className="nav_btn">
            <FavoriteBorderIcon className='icon'/>
            <span>Notifications</span>
        </button>
        <button className="nav_btn">
            <AddCircleOutlineIcon className='icon'/>
            <span>Create</span>
        </button>
      </div>

      <div className="nav_profile">
      <Link to='./profile' className='link_profile'>
      <button className='nav_btn'>
            <p className='navprofile'></p>
            <span>Profile</span>
      </button>
      </Link>
      </div>
      
      <div className="nav_more">
      <button className="nav_btn">
            <MenuIcon className='icon'/>
            <span>More</span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
