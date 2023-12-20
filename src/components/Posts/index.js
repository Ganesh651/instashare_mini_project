import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { BsHeart } from 'react-icons/bs';
import { BsChat } from "react-icons/bs";
import { BsShareFill } from "react-icons/bs";
import { Link, } from 'react-router-dom';
import './index.css';

const Posts = props => {
  const {
    eachPost,
    onpostLike,
    isPostLiked,
    isClicked,
  } = props
  const [count, setCount] = useState(eachPost.likes_count)

  const onBtnClick = () => {
    onpostLike(eachPost.post_id)
    isPostLiked()
    setCount(count + 1)
  }

  const onDislike = () => {
    onpostLike(eachPost.post_id)
    isPostLiked()
    setCount(count - 1)
  }


  return (
    <div className='post-container'>
      <Link to={`/user/${eachPost.user_id}`} style={{ textDecoration: "none", color: "#000" }}>
        <div className='post-header'>
          <img src={eachPost.profile_pic} alt={eachPost.user_name} />
          <span>{eachPost.user_name}</span>
        </div>
      </Link >
        <img
          src={eachPost.post_details.image_url}
          alt={eachPost.post_details.caption}
          className='post-details-image'
        />
        <div className='post-details-container'>
        <div className='icons-container'>
          {isClicked ?
            <button type='button' className='like-button' onClick={onBtnClick}>
              <BsHeart className='icons' title="disliked" />
            </button> :
            <button type='button' className='like-button' onClick={onDislike}>
              <FcLike className='heart-icon' title="Liked" />
            </button>
          }
          <div>
            <button ty="button" className='like-button'>
              <BsChat className='icons' />
            </button>
            </div>
            <div>
              <BsShareFill className='icons' />
            </div>
          </div>
          <div style={{ marginLeft: "8px" }}>
          <p className='likes-count'>{count} likes</p>
            <p className='caption'>{eachPost.post_details.caption}</p>
            {eachPost.comments.map(each => (
              <p className='comment' key={each.user_id}><span className='span-text-comment'>{each.user_name} </span> {each.comment}</p>
            ))}
            <p className='created-at'>{eachPost.created_at}</p>
          </div>
        </div>
    </div>
  )
}

export default Posts
