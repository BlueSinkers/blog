import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ProjectBanner from '../components/projectsbanner'
import BlogCard from '../components/blogcard'
import TechBanner from '../components/techbanner'
import ThoughtsBanner from '../components/thoughtsbanner'
import SportsBanner from '../components/sportsbanner'
import profileImage from '../images/profile.jpg' // Correct relative path
import './blogstyles.css'

const TagTemplate = ({ data, pageContext }) => {
  const posts = data.allMdx.nodes
  const { tag } = pageContext // Get the tag from the page context

  return (
    <Layout pageTitle={`"${tag} Blogposts"`}>

      {/* Conditionally render banners based on the tag */}
      {tag === 'project' && <ProjectBanner />}
      {tag === 'tech' && <TechBanner />}
      {tag === 'thoughts' && <ThoughtsBanner />}
      {tag === 'sports' && <SportsBanner />}

      {posts.length === 0 ? (
        <p>No posts found for this tag.</p>
      ) : (
        <div className="container">
          {posts.map(post => (
              <BlogCard
              className="card"
              key={post.id}
              title={post.frontmatter.title}
              imgSrc={post.frontmatter.image}
              userImg={profileImage} // Add user image if available
              description={post.frontmatter.syn}
              userName="Abhiram Kidambi"
              date={post.frontmatter.dateMade}
              tags={post.frontmatter.tags} // Pass all tags or just the matched tag
              slug = {post.frontmatter.slug}
            />
          ))}
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query($tag: String!) {
    allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          tags
          slug
          dateMade
          image
          syn
        }
      }
    }
  }
`

export default TagTemplate
