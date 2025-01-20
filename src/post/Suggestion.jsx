import React from 'react'
import './suggestion.css'
import image from '../navbar/images/profile.jpg'
import { Avatar } from '@mui/material'

function Suggestion() {
    const suggest = [
        {
            suggest_profile:'',
            suggest_user:'ankur_mishra'
        },
        {
            suggest_profile:'',
            suggest_user:'rohan_24'
        },
        {
            suggest_profile:'',
            suggest_user:'barun_01'
        },
        {
            suggest_profile:'',
            suggest_user:'pandey_amit'
        },
    ]
  return (
    <div className='suggestions'>

        <div className="suggestion_user s_head">
            <div className="user_left">
                <span className="avatar">
                <img src={image} alt="" className='profile'/>
                </span>
                <div className="userinfo">
                    <span className="user">amarnath_107</span>
                    <span className="relation">AMARNATH AICH</span>
                </div>
            </div>
            <button className="follow">Switch</button>
        </div>

      <div className="suggestion_title">
        <span className="left_title">Suggested for you</span>
        <button className="see_all">See All</button>
      </div>
      
      <div className="suggestion_username">
        
      </div>

       <div className="suggestion_username">
        {
            suggest.map((suggest)=>{
                return (
                    <div className="suggestion_user">
              <div className="user_left">
                <span className="avatar">
                    <Avatar>{suggest.suggest_user.at(0).toUpperCase()}</Avatar>
                </span>
                <div className="userinfo">
                    <span className="user">{suggest.suggest_user}</span>
                    <span className="relation">New to instagram</span>
                </div>
            </div>
            <button className="follow">Follow</button>
        </div>
                )
            })
        }
      </div>

    </div>
  )
}

export default Suggestion
