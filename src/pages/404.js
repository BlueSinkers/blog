import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"

const NotFoundPage = () => {
  const [seconds, setSeconds] = useState(10) // Initialize the countdown timer

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) {
          clearInterval(timer) // Stop the interval when it reaches 1
          navigate("/") // Redirect after 10 seconds
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer) // Cleanup the interval on unmount
  }, [])

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div>
        <h1>404: Not Found</h1>
        <p>You will be redirected to the home page in {seconds} seconds...</p>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>