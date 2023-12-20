/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useContext, useState } from 'react'
import Cookies from 'js-cookie'
import { ThreeDots } from 'react-loader-spinner'
import Header from '../Header'
import { BackgroundContainer } from './home'
import UserStories from '../UserStories'
import useFetch from '../useFetch'
import Posts from '../Posts'
import { postsUrl } from '../Urls'
import SearchAndThemeContext from '../../context/SearchContext'
import './index.css'


const Home = () => {
  const { search } = useContext(SearchAndThemeContext)
  const [likeMessage, setLikeMessage] = useState({})
  const [isClicked, setIsClicked] = useState(true)

  const token = Cookies.get("jwt_token")
  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  }
  const searchPost = postsUrl + search
  const data = useFetch(searchPost, options)
  const { fetchedData, isLoading } = data
  // console.log(fetchedData)
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

  const isPostLiked = () => {
    setIsClicked(!isClicked)
  }

  const onpostLike = async id => {
    const option = {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ like_status: isClicked })
    }
    const response = await fetch(`https://apis.ccbp.in/insta-share/posts/${id}/like`, option)
    const data = await response.json()
    // console.log(data)
    setLikeMessage(data)
  }

  const renderSuccessView = () => {
    // console.log("Data Recieved")
    return <>
      {fetchedData.posts.map(eachPost => (
        <Posts eachPost={eachPost}
          key={eachPost.post_id}
          onpostLike={onpostLike}
          likeMessage={likeMessage}
          isPostLiked={isPostLiked}
          isClicked={isClicked}
        />
      ))}
    </>
  }

  const renderFailureView = () => {
    console.log("Somthing went wrong")
  }


  const renderPost = () => {
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
    <Fragment>
      <Header />
      <BackgroundContainer>
        <UserStories />
        {renderPost()}
      </BackgroundContainer>
    </Fragment>
  )
}

export default Home
