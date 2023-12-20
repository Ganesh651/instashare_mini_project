import React from 'react'
import Cookies from 'js-cookie';
import Slider from 'react-slick'
import useFetch from '../useFetch';
import { storiesUrl } from '../Urls';
import './index.css'

const UserStories = () => {
  const token = Cookies.get("jwt_token")
  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  }
  const stories = useFetch(storiesUrl, options)
  const { fetchedData } = stories
  // console.log(fetchedData, isLoading)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          speed: 500
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 2,
          speed: 500,
          infinite: true
        }
      }
    ]
  }

  return (
    <div className='stories-container'>
      {fetchedData.length === 0 ?
        <p style={{ textAlign: "center" }}>{''}</p> :
        <Slider {...settings}>
          {fetchedData.users_stories.map(story => (
            <div key={story.user_id} className='story-container'>
              <img src={story.story_url} alt={story.user_name} className='story-image' />
              <p className='story-user-name'>{story.user_name}</p>
            </div>
          ))}
        </Slider>
      }

    </div>
  );
}

export default UserStories
