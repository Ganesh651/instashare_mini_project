import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { BsHeart } from 'react-icons/bs';
import { BsChat } from "react-icons/bs";
import { BsShareFill } from "react-icons/bs";
import { Link, } from 'react-router-dom';
import './index.css';

const Posts = props => {
  const [isClicked, setIsClicked] = useState(false)
  const { eachPost } = props
  const onBtnClick = () => setIsClicked(!isClicked)


  return (
    <Link to={`/user/${eachPost.user_id}`} style={{ textDecoration: "none", color: "#000" }}>
      <div className='post-container'>
        <div className='post-header'>
          <img src={eachPost.profile_pic} alt={eachPost.user_name} />
          <span>{eachPost.user_name}</span>
        </div>
        <img
          src={eachPost.post_details.image_url}
          alt={eachPost.post_details.caption}
          className='post-details-image'
        />
        <div className='post-details-container'>
          <div className='icons-container'>
            <button type='button' className='like-button' onClick={onBtnClick}>
              {isClicked ? <FcLike className='icons' /> : <BsHeart className='icons' />}
            </button>
            <div>
              <BsChat className='icons' />
            </div>
            <div>
              <BsShareFill className='icons' />
            </div>
          </div>
          <div style={{ marginLeft: "8px" }}>
            <p className='likes-count'>{eachPost.likes_count} likes</p>
            <p className='caption'>{eachPost.post_details.caption}</p>
            {eachPost.comments.map(each => (
              <p className='comment' key={each.user_id}><span className='span-text-comment'>{each.user_name} </span> {each.comment}</p>
            ))}
            <p className='created-at'>{eachPost.created_at}</p>
          </div>
        </div>
      </div>
    </Link >
  )
}

export default Posts
