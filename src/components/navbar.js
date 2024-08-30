import React from 'react';
import { Link } from 'gatsby';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import './layout.modules.css'; // Import global CSS file

const NavbarComp = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="navbar-custom sticky-top" color="light" light expand="lg" >
      <NavbarBrand className="navbar-brand-custom" href="#">Abhi's Blog</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto" navbar>
          <NavItem>
            <NavLink tag={Link} className="nav-link-custom" to="/">← Main Site</NavLink>
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
            <NavLink tag={Link} className="nav-link-custom" to="/">Search</NavLink>
          </NavItem>
        </Nav>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/abhiramkidambi/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" style={{ fontSize: '25px' }}></i>
          </a>
          <a href="https://github.com/bluesinkers" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" style={{ fontSize: '25px' }}></i>
          </a>
          <a href="mailto:akidamb1@terpmail.umd.edu?subject=Contacting%20you%20from%20Website" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope" style={{ fontSize: '25px' }}></i>
          </a>
          <a href="https://www.instagram.com/bluesyncers/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" style={{ fontSize: '25px' }}></i>
          </a>
          <a href="https://www.quora.com/profile/Abhiram-Kidambi-1" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-quora" style={{ fontSize: '25px' }}></i>
          </a>
          <a href="https://www.tiktok.com/@tutorking99" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok" style={{ fontSize: '25px' }}></i>
          </a>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComp;