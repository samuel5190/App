import React from 'react';
import { Link } from 'react-router-dom'; 
import FooterLogo from '../../assets/logo.svg';
import Facebook from '../../assets/fb-icon.png';
import Instagram from '../../assets/instagram-icon.png';
import Telegram from '../../assets/telegram-icon.png';
import './Footer.css';

const firstRow = "Privacy & Legal"; 
const secondRow = "About Us"; 

const addressList = [
    { text: 'Terms of use', link: '/terms-of-use' },
];

const items = [
    { text: 'About Us', link: '/about-us' },
    { text: 'Pricing', link: '/pricing' },
    { text: 'Contact us ↗', link: '/contact-us' },
];

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className="footer-logo-container">
                    <img src={FooterLogo} alt="Footer Logo" className="footer-image" />
                    <p className="footer-logo-text">Kindraise is dedicated to
                        providing you with the tools you
                        need to raise money for whatever
                        your cause.</p>

                    <div className="footer-social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} alt="Facebook" className="footer-social-icon" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" className="footer-social-icon" />
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            <img src={Telegram} alt="Telegram" className="footer-social-icon" />
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <div className="footer-details">
                        <h4 className="footer-heading" style={{fontSize: '23px'}}>{firstRow}</h4>
                        <ul>
                            {addressList.map((val, i) => (
                                <li key={i}>
                                    <Link to={val.link}>{val.text}</Link> 
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-section">
                    <div className="footer-details">
                        <h4 className="footer-heading" style={{fontSize: '23px'}}>{secondRow}</h4>
                        <ul>
                            {items.map((val, i) => (
                                <li key={i}>
                                    <Link to={val.link}>{val.text}</Link> 
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-item footer-bottom">
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
