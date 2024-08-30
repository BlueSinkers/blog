import React, { useEffect } from "react"
import { navigate } from "gatsby"

const NotFoundPage = () => {
  useEffect(() => {
    // Redirect to the home page immediately
    navigate("/")
  }, [])

  return null // Render nothing as we're redirecting
}

export default NotFoundPage

export const Head = () => <title>Not found</title>