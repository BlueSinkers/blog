import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { UserContext } from '../contexts/UserProvider';
import Login from './Login';
import Logout from './Logout';
import './layout.modules.css';

const NavbarComp = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user } = useContext(UserContext);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="navbar-custom sticky-top" color="light" light expand="lg">
      <NavbarBrand className="navbar-brand-custom" href="#">Abhi's Blog</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto" navbar>
          
          <NavItem>
            <NavLink tag={Link} className="nav-link-custom" to="/#home">Home</NavLink>
          </NavItem>

          {/* Tags Dropdown */}
          <UncontrolledDropdown nav inNavbar className="dropdown">
            <NavLink tag={Link} className="nav-link-custom dropdown-toggle" to="/#tags">
              Tags
            </NavLink>
            <DropdownMenu right>
              <DropdownItem tag={Link} to="/tags/project">Projects</DropdownItem>
              <DropdownItem tag={Link} to="/tags/tech">Tech</DropdownItem>
              <DropdownItem tag={Link} to="/tags/thoughts">Thoughts</DropdownItem>
              <DropdownItem tag={Link} to="/tags/sports">Sports</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <NavItem>
            <NavLink tag={Link} className="nav-link-custom" to="/#blogcards-main">Catalog</NavLink>
          </NavItem>
          <NavItem>
            <a href="https://www.abhiramkidambi.com" className="nav-link-custom" rel="noopener noreferrer">
              ← Main Site
            </a>
          </NavItem>
          <NavItem>
          <a href="https://www.abhiramkidambi.com/#contact" className="nav-link-custom" rel="noopener noreferrer">
              Contact
            </a>
          </NavItem>
        </Nav>

        {/* User dropdown unchanged */}
        <Nav className="ml-auto" navbar>
          {user ? (
            <UncontrolledDropdown nav inNavbar>
              <NavLink className="nav-link-custom dropdown-toggle font-roboto">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="user-profile-pic"
                  />
                ) : (
                  <div className="user-profile-pic-placeholder"></div>
                )}
                {user.displayName}
              </NavLink>
              <DropdownMenu right>
                <Logout />
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : (
            <NavItem>
              <Login />
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComp;
