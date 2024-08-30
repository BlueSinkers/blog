import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Articles from '../../components/article.js'


const BlogPage = ({ data, children }) => {
  return (  
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Articles 
        title={data.mdx.frontmatter.title} 
        image={data.mdx.frontmatter.image}
        description={children}
        datew={data.mdx.frontmatter.dateMade}
        datee={data.mdx.frontmatter.dateEdited}
      /> 
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        dateMade
        dateEdited
        slug
        syn
        tags
        image
      }
      body
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPage
