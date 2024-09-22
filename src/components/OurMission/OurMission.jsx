import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OurMission.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const OurMission = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, 
    });
  }, []);

  return (
    <div className='mission-solution-section'>
      <div className='mission-solution-header' data-aos="fade-up">
        <div className='mission-solution-content'>
            <h1>Our Mission is <span>Simplifying Generosity</span></h1>
            <p>Together, we're not just raising funds; we're raising hope, raising communities, and raising the bar for what's possible in Nigerian philanthropy.</p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;