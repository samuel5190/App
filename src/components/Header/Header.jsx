import React, { useState, useEffect } from 'react';
import './Header.css';
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/logo.svg";
import Hamburger from 'hamburger-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const {token} = useSelector((state)=>state.kindraise)
  // console.log(token,"user")





  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header>
      {/* {isMobile ? (
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
      )} */}
      <div className='headWrapper'>
        <div className='headCampBox' onClick={()=>navigate('/explore-campaigns')}>
          Campaigns
        </div>
        <div className='headLogoBox'>
          <img src={logo} alt="" onClick={()=>navigate('/')} />
        </div>
        <div>
          <ul>
            <li onClick={()=>navigate('/about-us')}>About</li>
            <li onClick={()=>navigate('/login')}>Login</li>
            <li><button onClick={()=>navigate('/signup')}>sign up</button></li>
            <div className='mobileMenuHead'>{isOpen ? <CgClose color='white' onClick={()=>setIsOpen(false)} size={20}/>:<BiMenu  onClick={()=>setIsOpen(true)} size={20}/>}</div>
          </ul>
          {
            isOpen ? <div className='mediaHead'>
              <div className='mediaHeadWrapper'>
                <nav>
                  <a href="" onClick={()=>navigate('/explore-campaigns')}>Campaign</a>
                  <a href="" onClick={()=>navigate('/about-us')}>About</a>
                  <a href="" onClick={()=>navigate('/login')}>Login</a>
                  <a href="" onClick={()=>navigate('/signup')}>Signup</a>
                </nav>
              </div>
            </div>:null
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
