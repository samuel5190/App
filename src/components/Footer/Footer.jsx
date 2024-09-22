import React from 'react';
import { Link } from "react-router-dom";
import FooterLogo from '../../assets/logo.svg';
import Facebook from '../../assets/fb-icon.png';
import Instagram from '../../assets/instagram-icon.png';
import Telegram from '../../assets/telegram-icon.png';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-item footer-logo">
          <img src={FooterLogo} alt="Footer Logo" />
          <p className='footer-prescb'>Kindraise is dedicated to <br />providing you with the tools you <br /> need to raise money for whatever <br /> your cause may be.</p>
          <div className="social-media-icon">
          <img src={Facebook} alt="Facebook" />
          <img src={Telegram} alt="Telegram" />
          <img src={Instagram} alt="Instagram" />
        </div>
        </div>
        <div className="footer-item">
        <h2>Privacy and Legal</h2>
        <ul>
          <li>
            <Link to="/terms-of-use">Terms of use</Link>
          </li>
        </ul>
      </div>
      <div className="footer-item">
        <h2>About</h2>
        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/faqs">FAQS</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      
        <div className="footer-item footer-bottom">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;