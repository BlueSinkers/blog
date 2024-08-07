import React from 'react';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import * as styles from './layout.modules.css'; // Import custom CSS module

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <a className={`navbar-brand ${styles.navbarBrand}`} href="#">Abhi's Blog</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className={`nav-link active ${styles.navLink}`} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.navLink}`} to="/search">Search</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.navLink}`} to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.navLink}`} to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.navLink}`} to="/contact">Contact</Link>
          </li>
        </ul>
        <div className={styles.socialIcons}>
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
      </div>
    </nav>
  );
};

export default Navbar;