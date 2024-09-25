import React, { useState, useEffect } from 'react';
import './Header.css';
import { CiSearch } from "react-icons/ci";
import { RiCloseLine } from "react-icons/ri"; 
import logo from "../../assets/logo.svg";
import Hamburger from 'hamburger-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.kindraise);




  const handleExploreCampaign = () => {
    navigate("/explore-campaigns"); 
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };


  return (
    <header>
      {/* {isMobile ? (
        <div className="header-mobile">
          <CiSearch size={30} onClick={handleExploreCampaign} style={{ cursor: "pointer" }}/>
          <img src={logo} alt="logo" className="header-logo" onClick={proceed} />
          <div onClick={toggleMenu} aria-label="Toggle navigation">
            {isOpen ? (
              <RiCloseLine size={30} color="black" /> // Show close icon when menu is open
            ) : (
              <Hamburger size={30} toggled={isOpen} /> // Show hamburger icon when menu is closed
            )}
          </div>
          {isOpen && (
            <nav className={`mobile-nav ${isOpen ? 'open' : ''}`} data-aos="slide-left" data-aos-duration="800">
              <div className="nav-header">
                <a onClick={() => navigate('/about-us')}>About</a>
                <RiCloseLine size={24} color="black" onClick={toggleMenu} className="close-icon" /> 
              </div>
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
