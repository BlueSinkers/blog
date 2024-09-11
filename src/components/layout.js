import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import NavbarComp from './navbar' // Ensure the path to Navbar is correct
import Footer from './footer' // Ensure the path to Footer is correct
import UserProvider from '../contexts/UserProvider'; // Adjust the path if needed

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
    <UserProvider>
      <div className="d-flex flex-column min-vh-100">
        <NavbarComp />
        <main className="flex-grow-1">
          {children}
        </main>
        <Footer />
      </div>
    </UserProvider>
  )
}

export default Layout