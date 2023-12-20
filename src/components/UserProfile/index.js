import React from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { IoCamera } from "react-icons/io5";
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import Cookies from 'js-cookie'
import Header from '../Header'
import { userDetailsUrl } from '../Urls';
import UserPosts from '../UserPosts';
import './index.css'

const UserProfile = () => {
  const token = Cookies.get("jwt_token")

  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  }

  const { id } = useParams()

  const userData = useFetch(userDetailsUrl + id, options)

  const { fetchedData, isLoading } = userData

  // console.log(fetchedData, isLoading)


  const renderLoaderView = () => (
    <div className="loader-container">
      <ThreeDots
        height={80}
        width={80}
        radius={9}
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        visible={true} />
    </div>
  )

  const renderUserStories = () => (
    <div className='user-stories-container'>
      {fetchedData.user_details.stories.map(story => (
        <img className='user-story-image' src={story.image} alt="story" key={story.id} />
      ))}
    </div>
  )


  const renderSuccessView = () => (
    <div className='user-details-section'>
      <span className='mobile-username'>{fetchedData.user_details.user_name}</span>
      <div className='user-details-container'>
        <img
          src={fetchedData.user_details.profile_pic}
          alt={fetchedData.user_details.user_id}
          className='user-profile-pic'
        />
        <div className='user-details'>
          <span className='responsive-user-name'>{fetchedData.user_details.user_name}</span>
          <div className='count-container'>
            <p className='count-details' style={{ color: "#262626" }}>
              <span style={{ fontWeight: "600" }}>{fetchedData.user_details.posts_count} </span>Posts
            </p>
            <p className='count-details' style={{ color: "#262626" }}>
              <span style={{ fontWeight: "600" }}>{fetchedData.user_details.followers_count} </span>follower
            </p>
            <p className='count-details' style={{ color: "#262626" }}>
              <span style={{ fontWeight: "600" }}>{fetchedData.user_details.following_count} </span>following
            </p>
          </div>
          <p className='user-id'>{fetchedData.user_details.user_id}</p>
          <p className='user-bio'>{fetchedData.user_details.user_bio}</p>
        </div>
      </div>
      <p className='user-id-mobile'>{fetchedData.user_details.user_id}</p>
      <p className='user-bio-mobile'>{fetchedData.user_details.user_bio}</p>
      {renderUserStories()}
      <hr />
      <div className='posts-container'>
        <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1702960972/Frame_1420_goqrw6.png" alt="post icon" />
        <span>Posts</span>
      </div>
      {
        fetchedData.user_details.posts.length === 0 ?
          <div className='no-posts-container'>
            <IoCamera />
            <p>No Posts Yet</p>
          </div> :
          <div className='user-posts-container'>
            {fetchedData.user_details.posts.map(post => (
              <UserPosts post={post} key={post.id} />
            ))}
          </div>
      }
    </div>
  )

  const renderFailureView = () => { }

  const renderUserDetails = () => {
    switch (isLoading) {
      case "INPROGRESS":
        return renderLoaderView()
      case "SUCCESS":
        return renderSuccessView()
      case "FAILURE":
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      {renderUserDetails()}
    </>
  )
}

export default UserProfile
