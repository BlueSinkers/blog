import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const TagTemplate = ({ data }) => {
  const posts = data.allMdx.nodes
  const tag = data.allMdx.nodes[0]?.frontmatter.tags[0] || 'No tag'

  return (
    <Layout pageTitle="Tag Posts">
      <Seo title={`Posts tagged with ${tag}`} />
      <h1>Posts tagged with {tag}</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
          <a href={`../../blog/${post.frontmatter.slug}`}>{post.frontmatter.title}</a>
          </li>
        ))}
      </ul>
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
        }
      }
    }
  }
`

export default TagTemplate