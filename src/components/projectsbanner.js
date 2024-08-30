import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './projectsbanner.css'

const ProjectBanner = () => {
  return (
    <div className="bg-image-proj">
      <div className="mask-proj">
        <Container className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white text-center">
            <h1 className="mb-5 permanent-marker-regular">PROJECTS!</h1>
            <h4 className="mb-3 about">
              Here are blogposts about various projects of mine! Scroll to read!
            </h4>
            <Button variant="outline-light" size="lg" href="/#tags">BACK TO TAGS!</Button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ProjectBanner
