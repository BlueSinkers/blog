// BlogPage.js
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import BlogCard from '../components/blogcard';
import './blogstyles.css';
import HeroSection from '../components/hero';
import profileImage from '../images/profile.jpg'; // Correct relative path

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <div className="main" id="home">
      <HeroSection />
      
      <div className="container" id="blogcards-main">
        {data.allMdx.nodes.map(node => (
          <BlogCard
            className="card"
            key={node.id}
            title={node.frontmatter.title}
            imgSrc={node.frontmatter.image} // Assuming this is handled correctly
            userImg={profileImage} // Use the imported image here
            description={node.frontmatter.syn}
            userName="Abhiram Kidambi"
            date={node.frontmatter.dateMade}
            tag={node.frontmatter.tags[0]}
            slug={node.frontmatter.slug} // Pass slug here
          />
        ))}
      </div> 
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { dateMade: DESC } }) {
      nodes {
        frontmatter {
          dateMade
          title
          slug
          syn
          tags
          image
        }
        id
      }
    }
  }
`

export default BlogPage;
