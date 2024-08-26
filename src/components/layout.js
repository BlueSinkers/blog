import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import NavbarComp from './navbar' // Make sure the path to Navbar is correct

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <div>
      <NavbarComp />
      <main>
        {children}
      </main>
    </div>
  )
};

export default Layout;