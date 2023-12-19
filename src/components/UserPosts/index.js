import React from 'react'
import './index.css'

const UserPosts = (props) => {
  const { post } = props
  return <img src={post.image} alt="post" className='user-posts-image' />

}

export default UserPosts
