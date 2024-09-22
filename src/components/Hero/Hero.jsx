import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoveImage from '../../assets/love-image.png';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        <div className="image-wrapper" data-aos="fade-right">
          <div className="image-container">
            <img src={LoveImage} alt="Fundraising" className="hero-image" />
          </div>
        </div>

        <div className="text-wrapper" data-aos="fade-left">
          <h1>Do something incredible today</h1>
          <p>
          Fundraise for yourself, as a group working towards a goal, or an NGO on a mission. </p>

          <button onClick={() => navigate('/signup')} className="cta-button">Start a KindRaise</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
