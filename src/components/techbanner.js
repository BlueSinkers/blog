import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './techbanner.css'

const TechBanner = () => {
  return (
    <div className="bg-image-tech">
      <div className="mask-tech">
        <Container className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white text-center">
            <h1 className="mb-5 permanent-marker-regular">TECH!</h1>
            <h4 className="mb-3 about">
              Here are blogposts regarding technical topics! Scroll to read!
            </h4>
            <Button variant="outline-light" size="lg" href="/#tags">BACK TO TAGS!</Button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default TechBanner
