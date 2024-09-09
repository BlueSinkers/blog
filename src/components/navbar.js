import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import { UserContext } from '../contexts/UserProvider'; // Import UserContext
import Login from './Login'; // Import Login component
import Logout from './Logout'; // Import Logout component
import './layout.modules.css'; // Import global CSS file

const NavbarComp = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false); // State for dropdown
  const { user } = useContext(UserContext); // Get the user context

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen); // Toggle dropdown

  return (
    <Navbar className="navbar-custom sticky-top" color="light" light expand="lg">
      <NavbarBrand className="navbar-brand-custom" href="#">Abhi's Blog</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto" navbar>
          <NavItem>
            <a href="https://www.abhiramkidambi.com" className="nav-link-custom" target="_blank" rel="noopener noreferrer">
              ← Main Site
            </a>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="nav-link-custom" to="/#home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="nav-link-custom" to="/#tags">Tags</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="nav-link-custom" to="/#blogcards-main">Catalog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="nav-link-custom" to="/">Contact Me</NavLink>
          </NavItem>
        </Nav>
        
        {/* Display Login/Logout and User Info */}
        <Nav className="ml-auto" navbar>
          {user ? (
            <NavItem className="d-flex align-items-center position-relative">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="user-profile-pic"
                />
              ) : (
                <div className="user-profile-pic-placeholder"></div>
              )}
              <span
                className="nav-link-custom ml-2 dropdown-toggle"
                onClick={toggleDropdown}
                role="button"
              >
                 {user.displayName}
              </span>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Logout /> {/* Use Logout component */}
                </div>
              )}
            </NavItem>
          ) : (
            <NavItem>
              <Login /> {/* Use Login component */}
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComp;
