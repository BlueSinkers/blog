import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './sportsbanner.css'

const SportsBanner = () => {
  return (
    <div className="bg-image-sports">
      <div className="mask-sports">
        <Container className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white text-center">
            <h1 className="mb-5 permanent-marker-regular">SPORTS!</h1>
            <h4 className="mb-3 about">
              Here are blogposts regarding sports and fitness! Scroll to read!
            </h4>
            <Button variant="outline-light" size="lg" href="/#tags">BACK TO TAGS!</Button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default SportsBanner