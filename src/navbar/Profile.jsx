import React from 'react'
import './profile.css'
import image from '../navbar/images/profile.jpg'
import highlight1 from '../navbar/images/highlight_1.jpg'
import highlight2 from '../navbar/images/highlight_2.jpg'
import highlight3 from '../navbar/images/highlight_3.jpg'
import highlight4 from '../navbar/images/highlight_4.jpg'
import highlight5 from '../navbar/images/highlight_5.jpg'
import highlight6 from '../navbar/images/highlight_6.jpg'
import highlight7 from '../navbar/images/highlight_7.jpg'

import post1 from '../navbar/images/post_1.jpg'
import post2 from '../navbar/images/post_2.jpg'
import post3 from '../navbar/images/post_3.jpg'
import post4 from '../navbar/images/post_4.jpg'
import post5 from '../navbar/images/post_5.jpg'
import post6 from '../navbar/images/post_6.jpg'
import post7 from '../navbar/images/post_7.jpg'
import post8 from '../navbar/images/post_8.jpg'
import post9 from '../navbar/images/post_9.jpg'
import post10 from '../navbar/images/post_10.jpg'
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FaThreads } from "react-icons/fa6";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import PostAddIcon from '@mui/icons-material/PostAdd';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FeedIcon from '@mui/icons-material/Feed';

const Profile = () => {
const highlights = [
      {
        highlight_image: highlight1,
        h_name:'😍'
      },
      {
        highlight_image: highlight2,
        h_name:'friends'
      },
      {
        highlight_image: highlight3,
        h_name:'gym ❣️'
      },
      {
        highlight_image: highlight4,
        h_name:'🖤💜'
      },
      {
        highlight_image: highlight5,
        h_name:'🤍'
      },
      {
        highlight_image: highlight6,
        h_name:'.....'
      },
      {
        highlight_image: highlight7,
        h_name:'Transformation'
      },
      {
        highlight_image: post3,
        h_name:'New'
      }
    ]

    const post_image = [
      {
        p_image: post1
      },
      {
        p_image: image
      },
      {
        p_image: post2
      },
      {
        p_image: post10
      },
      {
        p_image: post4
      },
      {
        p_image: post9
      },
      {
        p_image: post6
      },
      {
        p_image: post7
      },
      {
        p_image: post8
      },
    ]

  return (
    <div className='profile_section'>
      <div className="top_icon">
        <SettingsIcon/>
        <span>amarnath_107 
          <KeyboardArrowDownIcon/>
        </span>
        <FaThreads className='thread'/>
      </div>

      <div className="profile_head">

        {/* left head sec */}
        <div className="left_headp">
          <span>Note...</span>
          <img src={image} alt="" />
        </div>

        {/* right head sec */}
        <div className="right_headp">

          <div className="name_sec">
            <span className="amar">amarnath_107</span>
            <div className="edit_profile">
              <button className='edit_btn'>Edit profile</button>
              <button className='edit_btn'>View archive</button>
            </div>
            <span className='setting'>
              <SettingsIcon/>
            </span>
          </div>
          <div className="edit_profile ep">
              <button className='edit_btn'>Edit profile</button>
              <button className='edit_btn'>View archive</button>
            </div>

          <div className="follower_sec">
            <span>23 posts</span>
            <span>585 followers</span>
            <span>255 following</span>
          </div>

          <div className="bio">
          <span className='name'>ᴀᴍᴀʀɴᴀᴛʜ ᴀɪᴄʜ</span>
          <span>Ꮢ ᴀ ᴊ ᴘ ᴜ ᴛ ⚔</span>
          <span>In love with #gym 💪</span>
          <span>As more you sore more you are stronger!</span>
          <span>जय श्री राम🚩</span>
          </div>
        </div>
      </div>

        {/* Highlights */}
        <div className="highlight_story">
      {
        highlights.map((highlights)=>{
          return (
            <div className="highlight_">
            <img src={highlights.highlight_image} alt="" className="h_profile" />
            <span className="h_name">{highlights.h_name}</span>
            </div>
          )
        })
      }
      </div>

        <div className="follower_sec follows">
            <div className='pf'>23 <span>posts</span></div>
            <div className='pf'>585 <span>followers</span></div>
            <div className='pf'>255 <span>following</span></div>
        </div>

        <div className="tagged">
          <div className="tag_"><PostAddIcon/><span>POST</span></div>
          <div className="tag_"><FeedIcon/><span>FEED</span></div>
          <div className="tag_"><SlideshowIcon/><span>REELS</span></div>
          <div className="tag_"><BookmarkBorderIcon/><span>SAVED</span></div>
          <div className="tag_"><AccountBoxIcon/><span>TAGGED</span></div>
        </div>

        <div className="post_photo">
          {
            post_image.map((post_image)=>{
              return (
                <div className="p_post">
                  <img src={post_image.p_image} alt="" />
                </div>
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
            <span className='_profile'><img src={image} alt="" /></span>
        </button>
        </div>


    </div>
  )
}

export default Profile
