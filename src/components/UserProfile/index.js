import React from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import Cookies from 'js-cookie'
import Header from '../Header'
import { userDetailsUrl } from '../Urls';
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

  console.log(fetchedData, isLoading)


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

  const renderSuccessView = () => (
    <div className='user-details-section'>
      <div className='user-details-container'>
        <img
          src={fetchedData.user_details.profile_pic}
          alt={fetchedData.user_details.user_id}
          className='user-profile-pic'
        />
        <div className='user-details'>
          <span style={{ fontSize: "20px", color: "#262626" }}>{fetchedData.user_details.user_name}</span>
          <div className='count-container'>
            <p style={{ color: "#262626" }}>
              <span style={{ fontWeight: "600" }}>{fetchedData.user_details.posts_count} </span>Posts
            </p>
            <p style={{ color: "#262626" }}>
              <span style={{ fontWeight: "600" }}>{fetchedData.user_details.followers_count} </span>follower
            </p>
            <p style={{ color: "#262626" }}>
              <span style={{ fontWeight: "600" }}>{fetchedData.user_details.following_count} </span>following
            </p>
          </div>
          <p className='user-id'>{fetchedData.user_details.user_id}</p>
          <p className='user-bio'>{fetchedData.user_details.user_bio}</p>
        </div>
      </div>
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
