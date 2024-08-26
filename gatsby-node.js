const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for tags from MDX files
  const result = await graphql(`
    query {
      allMdx {
        distinct(field: frontmatter___tags)
      }
    }
  `)

  // Create a page for each tag
  result.data.allMdx.distinct.forEach(tag => {
    createPage({
      path: `/tags/${tag}`,
      component: path.resolve(`./src/templates/tag-template.js`),
      context: {
        tag,
      },
    })
  })
}