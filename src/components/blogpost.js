// src/components/BlogPost.js
import React from 'react';
import './blogpost.css'; // Import the CSS file

const BlogPost = ({ title, image, description, datew, datee, tags}) => {
  return (
    <div className="blog-post">
      <div className="blog-image" style={{ backgroundImage: `url('${image}')` }}>
        <div className="blog-text">
          <h1>{title}</h1>
          By Abhiram Kidambi
        </div>
      </div>
      <div className="text-inside">
        {description}
        <hr></hr>
        Tags: {tags.join(', ')}
        Written: {datew} <br></br>
        Last Edited: {datee}
      </div>
      
    </div>
  );
};

export default BlogPost;