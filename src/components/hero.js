import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './herostyles.css'; // Ensure this file is correctly imported

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-image">
        <div className="mask">
          <Container className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white text-center">
              <h1 className="mb-5 permanent-marker-regular">Welcome to Abhi's Blog!</h1>
              <h4 className="mb-3 about">A place for me to write about all kinds of my thoughts! Scroll to find more info about the tags!</h4>
              <Button variant="outline-light button-no-bold" size="lg" href="/#blogcards-main">SEE WHOLE BLOG CATALOG!</Button>
            </div>
          </Container>
        </div>
      </div>

      {/* Split Layout Section */}
      <Container fluid className="split-layout noto" id="tags">
        
          {/* Text Section */}
          <Col md={8} className="text-section d-flex flex-column justify-content-center" >
            <h1 className="display-5 fw-bold anton">Blog Tags</h1>
            <p className="lead">Click the buttons to ONLY see blogposts with certain tags! Check the photo of me dunking to the right! Scroll down to see catalog!</p>
            <ul className="list-unstyled">
              <li><b>PROJECTS</b>: blogposts regarding personal and professional projects</li>
              <li><b>TECH</b>: blogposts regarding anything pertaining to CS or Math including projects</li>
              <li><b>PERSONAL</b>: blogposts regarding personal thoughts about a variety of subjects</li>
              <li><b>UPDATED</b>: blogposts containing material/things I try to update as much as possible</li>
            </ul>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Row className="button-row">
            <Col md={3} className="d-grid gap-2">
              <Button variant="primary" size="lg" href="/tags/project">Projects</Button>
            </Col>
            <Col md={3} className="d-grid gap-2">
              <Button variant="primary" size="lg" href="/tags/tech">Tech</Button>
            </Col>
            <Col md={3} className="d-grid gap-2">
              <Button variant="primary" size="lg" href="/tags/thought">Thoughts</Button>
            </Col>
            <Col md={3} className="d-grid gap-2">
              <Button variant="primary" size="lg" href="/updated">Updated</Button>
            </Col>
          </Row>
</div>


          </Col>

          {/* Image Section */}
          <Col md={4} className="image-section">
            {/* Background image applied through CSS */}
          </Col>
      </Container>



    </div>
  );
};

export default HeroSection;
