import React from 'react';
import './articles.css';

const Articles = ({ title, image, description, datew, datee, tags }) => {
  return (
    <>
      <div className="container1">
        <div
          className="hero"
          style={{
            background: `url(${image}) no-repeat center center fixed`,
            backgroundSize: 'cover',
          }}
        >
          <div className="hero__image">
            <div className="hero__image--overlay"></div>
            <div className="hero__child hero__child--primary animation--floating"></div>
            <div className="hero__child hero__child--secondary animation--floating"></div>
            <p className="hero__title animation--title-in">{title}</p>
            <p className="hero__subtitle animation--title-in">by Abhiram Kidambi</p>
          </div>
        </div>
      </div>
      <div className="section">
        {description}
        <hr/>
        <p className="information">
          Author: Abhiram Kidambi <br/>
          Written: {datew} <br/>
        Tags: {tags.map(tag => tag.toUpperCase()).join(", ")}</p>
      </div>
    </>
  );
};

export default Articles;
