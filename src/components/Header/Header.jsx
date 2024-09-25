import React, { useState, useEffect } from 'react';
import './Header.css';
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/logo.svg";
import Hamburger from 'hamburger-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const {token} = useSelector((state)=>state.kindraise)
  // console.log(token,"user")

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogo=()=>{   
    if (token) {
      navigate(-1)
    } else {
      navigate("/")
    }
  }
  const proceed =()=>{
    if (!token) {
      navigate('/')
    } else {
      navigate('/dashboard')
    }
  }


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    const mobileView = window.innerWidth <= 768;
    setIsMobile(mobileView);
    if (!mobileView) {
      setIsOpen(false); // Close the menu on desktop view
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      {isMobile ? (
        <div className="header-mobile">
          <CiSearch onClick={()=>navigate('/explore-campaigns')}/>
          <img src={logo} alt="logo" className="header-logo" onClick={{proceed}} />
          <Hamburger
          toggled={isOpen}
          toggle={toggleMenu}
          aria-label="Toggle navigation"
        />
          {isOpen && (
            <nav className={`mobile-nav ${isOpen ? 'open' : ''}`}>
            <a onClick={() => navigate('/about-us')}>About</a>
            <a onClick={() => navigate('/explore-campaigns')}>Campaigns</a>
              <a onClick={() => navigate('/login')}>Login</a>
              <a className="signup-button" onClick={() => navigate('/signup')}>Sign Up</a>
            </nav>
          )}
        </div>
      ) : (
        <div className="header header-desktop">
          <div className="header-left">
            <a onClick={() => navigate('/about-us')}>About</a>
            <a onClick={() => navigate('/explore-campaigns')} className='search-header-mobile'>
            <CiSearch />
            <span>Campaign</span>
          </a>
          </div>
          <div className="header-center">
            <img src={logo} alt="logo" className="header-logo" onClick={handleLogo} />
          </div>
          <div className="header-right">
            <a onClick={() => navigate('/pricing')}>Pricing</a>
            <a onClick={() => navigate('/login')}>Login</a>
            <a className="signup-button" onClick={() => navigate('/signup')}>Sign Up</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
