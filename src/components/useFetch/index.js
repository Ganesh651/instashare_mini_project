/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const apiConstraints = {
  initial: "INITIAL",
  in_progress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE"
}


const useFetch = (url, options) => {
  const [fetchedData, setFetchedData] = useState([])
  const [isLoading, setIsLoading] = useState(apiConstraints.initial)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(apiConstraints.in_progress)
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
        setIsLoading(apiConstraints.success)
        setFetchedData(data)
      } else {
        setIsLoading(apiConstraints.failure)
      }
    }
    getData()

  }, [])


  return { fetchedData, isLoading }
}



export default useFetch