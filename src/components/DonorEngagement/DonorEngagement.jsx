import React, { useEffect } from 'react';
import ScanToDonate from "../../assets/scan-to-donate.jpg";
import './DonorEngagement.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DonorEngagement = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,    
      mirror: true,
    }); 
  }, []);

  return (
    <section className="donor-engagement">
      <div className="donor-engagement-wrapper">
        <div className="donor-engagement-text" data-aos="fade-up">
          <h1>Donor <span>Engagement</span></h1>
          <p>
          Every KindRaise campaign gets its own unique QR code. You can print it on flyers, or share it at events. When someone scans your code, they’ll be taken directly to your fundraising page.</p>
        </div>

        <div className="donor-engagement-image" data-aos="fade-left">
          <img src={ScanToDonate} alt="Scan to Donate" className="donor-engagement-img" />
        </div>
      </div>
    </section>
  );
};

export default DonorEngagement;
