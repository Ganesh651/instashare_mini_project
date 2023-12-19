import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { IoCamera } from "react-icons/io5";
import Cookies from 'js-cookie'
import { myProfileUrl } from '../Urls'
import useFetch from '../useFetch'
import UserPosts from '../UserPosts'
import Header from '../Header'

const Profile = () => {
  const token = Cookies.get("jwt_token")

  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  }

  const profileData = useFetch(myProfileUrl, options)

  const { fetchedData, isLoading } = profileData

  const { profile } = fetchedData


  const renderProfileLoadingView = () => (
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
      {profile.stories.map(story => (
        <img className='user-story-image' src={story.image} alt="story" key={story.id} />
      ))}
    </div>
  )

  const renderProfileSuccessView = () => (
    <div className='user-details-section'>
      <span className='mobile-username'>{profile.user_name}</span>
      <div className='user-details-container'>
        <img
          src={profile.profile_pic}
          alt={profile.user_id}
          className='user-profile-pic'
        />
        <div className='user-details'>
          <span className='responsive-user-name'>{profile.user_name}</span>
          <div className='count-container'>
            <p style={{ color: "#262626" }}>
              <span style={{ fontWeight: "600" }}>{profile.posts_count} </span>Posts
            </p>
            <p style={{ color: "#262626" }}>
              <span style={{ fontWeight: "600" }}>{profile.followers_count} </span>follower
            </p>
            <p style={{ color: "#262626" }}>
              <span style={{ fontWeight: "600" }}>{profile.following_count} </span>following
            </p>
          </div>
          <p className='user-id'>{profile.user_name}</p>
          <p className='user-bio'>{profile.user_bio}</p>
        </div>
      </div>
      <p className='user-id-mobile'>{profile.user_name}</p>
      <p className='user-bio-mobile'>{profile.user_bio}</p>
      {renderUserStories()}
      <hr />
      <div className='posts-container'>
        <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1702960972/Frame_1420_goqrw6.png" alt="post icon" />
        <span>Posts</span>
      </div>
      {profile.posts.length === 0 ?
        <div className='no-posts-container'>
          <IoCamera />
          <p>No Posts Yet</p>
        </div> :
        <div className='user-posts-container'>
          {profile.posts.map(post => (
            <UserPosts post={post} key={post.id} />
          ))}
        </div>}

    </div>
  )

  const renderProfileFailureView = () => { }

  const renderMyProfile = () => {
    switch (isLoading) {
      case "INPROGRESS":
        return renderProfileLoadingView()
      case "SUCCESS":
        return renderProfileSuccessView()
      case "FAILURE":
        return renderProfileFailureView()
      default:
        return null;
    }
  }

  return (
    <>
      <Header />
      <div className='my-profile-section'>
        {renderMyProfile()}
      </div>
    </>
  )
}

export default Profile
