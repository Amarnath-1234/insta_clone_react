import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './story.css'
import React from 'react'
import { BookmarkBorder, ChatBubbleOutline, FavoriteBorder, Telegram } from '@mui/icons-material';

function Story({user, postimage, postvideo, profileimg, likes, timestamp}) {

  return (
    <div className='story'>
      <div className="story_sec">
      <div className="story_header">
        <div className="story_author">
           <img src={profileimg} className='s_profile'></img>
           <span className='title_p'>{user.toLowerCase()}</span> 
           <span className='hour'>•</span> 
           <span className='hour'>{timestamp}</span>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className="story_image">
        {
          postimage?<img src={postimage} alt="" />:
          <video  alt=""  muted autoPlay><source src={postvideo} type='video/mp4'/></video>
        }
      </div>
      
      <div className="story_footer">
        <div className="footer_icon">
          <div className="iconmain">
            <FavoriteBorder/>{likes}
            <ChatBubbleOutline/>
            <Telegram/>
          </div>
          <div className="iconsave">
            <BookmarkBorder/>
          </div>
        </div>
        <span>Liked by {likes} people.</span>
      </div>
      </div>
    </div>
  )
}

export default Story
