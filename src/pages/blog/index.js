import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import BlogCard from '../../components/blogcard'
import './blogstyles.css'
import HeroSection from '../../components/hero'

const BlogPage = ({ data }) => {
  return (
    <>
      <HeroSection></HeroSection>
    
      <div className="container">
      {data.allMdx.nodes.map(node => (
          <BlogCard
            className="card"
            key={node.id}
            title={node.frontmatter.title}
            imgSrc={node.frontmatter.image}
            userImg=""
            description={node.frontmatter.syn}
            userName="Abhiram Kidambi"
            date={node.frontmatter.dateMade}
            tag={node.frontmatter.tags[0]}  // This also had a small issue
          />
        ))}

      </div> 
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { dateMade: DESC }}) {
      nodes {
        frontmatter {
          dateMade
          title
          slug
          syn
          dateMade
          tags
          image
        }
        id
      }
    }
  }
`


export default BlogPage