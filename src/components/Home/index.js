import React, { Fragment } from 'react'
import Cookies from 'js-cookie'
import { ThreeDots } from 'react-loader-spinner'
import Header from '../Header'
import { BackgroundContainer } from './home'
import UserStories from '../UserStories'
import useFetch from '../useFetch'
import Posts from '../Posts'
import { postsUrl } from '../FetchURLS'
import './index.css'


const Home = () => {
  const token = Cookies.get("jwt_token")
  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  }
  const data = useFetch(postsUrl, options)
  const { fetchedData, isLoading } = data
  console.log(fetchedData)

  // const comments = fetchedData.posts.map(each => (each.comments.map(comment)))
  const renderLoaderView = () => (
    <div className="loader-container">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        visible={true} />
    </div>
  )

  const renderSuccessView = () => {
    console.log("Data Recieved")
    return <>
      {fetchedData.posts.map(eachPost => (
        <Posts eachPost={eachPost} key={eachPost.post_id} />
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
