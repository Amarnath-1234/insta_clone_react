import React, { useState } from 'react'
import './post.css'
import image from '../navbar/images/profile.jpg'
import pimage from '../navbar/images/priya.jpg'
import pyimage from '../navbar/images/priyanka.jpg'
import simage from '../navbar/images/sushree.jpg'
import fitness from '../navbar/images/fitness.jpg'
import food from '../navbar/images/food.jpg'
import mantis from '../navbar/images/mantis.webp'
import nature from '../navbar/images/nature.jpg'
import art from '../navbar/images/art.jpg'
import motivation from '../navbar/images/motivation.jpg'
import unknown from '../navbar/images/unknown.jpg'
import Suggestion from './Suggestion'
import Story from './story/Story'
import fit from '../navbar/images/fit.mp4'
import { FavoriteBorder } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom'

function Post() {
    const [post, setPost] = useState([
      {
        user : "rocky_fit",
        postimage : fitness,
        profileimg: fitness,
        likes : 265,
        timestamp : "1d"
      },
      {
        user : "fitness_for_u",
        postvideo: fit,
        postimage : '',
        profileimg: fitness,
        likes : 121,
        timestamp : "1d"
      },
      {
        user : "mantis_01",
        postimage : mantis,
        profileimg: mantis,
        likes : 265,
        timestamp : "1d"
      },
        {
            user : "motivation_class",
            postimage : motivation,
            profileimg: motivation,
            likes : 151,
            timestamp : "3d"
        },
        {
            user : "_foodie",
            postimage : food,
            profileimg: food,
            likes : 101,
            timestamp : "2d"
        },
        {
            user : "nature_world",
            postimage : nature,
            profileimg: nature,
            likes : 125,
            timestamp : "1d"
        },
        {
            user : "__unknown",
            postimage : unknown,
            profileimg: unknown,
            likes : 231,
            timestamp : "1d"
        }
    ])

    const storydata = [
      {
        storyimage: fitness,
        f_name:'_subhendu'
      },
      {
        storyimage: pimage,
        f_name:'priya_32'
      },
      {
        storyimage: pyimage,
        f_name:'priyanka_45'
      },
      {
        storyimage: unknown,
        f_name:'tina_01'
      },
      {
        storyimage: nature,
        f_name:'bibek'
      },
      {
        storyimage: mantis,
        f_name:'anup'
      },
      {
        storyimage: mantis,
        f_name:'aman_'
      },
      {
        storyimage: simage,
        f_name:'sushree'
      },
      {
        storyimage: art,
        f_name:'snigdha'
      },
      {
        storyimage: art,
        f_name:'_sneha'
      },
    ]
  return (
    <div className='post'>
      
    <div className="post_left">
      <div className="post_head top_bot">
        <img className='head_logo_top' src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="" />
        <input type="text" placeholder='Search' />
        <FavoriteBorder/>
      </div>
        {/* story-section */}
      <div className="top_story">
      {
        storydata.map((storydata)=>{
          return (
            <div className="story_post">
            <img src={storydata.storyimage} alt="" className="f_profile" />
            <span className="f_name">{storydata.f_name}</span>
            </div>
          )
        })
      }
      </div>

        <div className="post_story">
            {
                post.map((post)=>{
                   return (
                    <Story user={post.user} postimage={post.postimage} postvideo={post.postvideo} profileimg={post.profileimg} likes={post.likes} timestamp={post.timestamp}/>
                   )
                })
            }
        </div>
        <div className="post_foot top_bot">
        <button className="_btn">
            <HomeIcon className='icon'/>
        </button>
        <button className="_btn">
            <SearchIcon className='icon'/>
        </button>
        <button className="_btn">
            <ExploreIcon className='icon'/>
                </button>
        <button className="_btn">
            <SlideshowIcon className='icon'/>
            </button>
        <button className="_btn msg_btn">
            <ChatIcon className='icon'/><sup>1</sup> 
        </button>
        <button className="_btn">
            <AddCircleOutlineIcon className='icon'/>
        </button>
        <button className="_btn">
            <Link to='./profile'><span className='_profile'><img src={image} alt="" /></span></Link>
        </button>
        </div>
      </div>
      <div className="post_right">
        <Suggestion/>
      </div>
      
    </div>
  )
}

export default Post
