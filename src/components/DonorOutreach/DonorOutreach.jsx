import React, { useEffect } from 'react';
import Outreach from "../../assets/donor-outreach.jpg";
import './DonorOutreach.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DonorOutreach = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="donor-outreach">
      <div className="donor-outreach-wrapper">
        <div className="donor-outreach-image" data-aos="fade-right">
          <img src={Outreach} alt="Donor Outreach" className="donor-outreach-img" />
        </div>

        <div className="donor-outreach-text" data-aos="fade-left">
          <h1>Donor <span>Outreach</span></h1>
          <p>
          The more people who see your campaign, the more support you can get. Use our tools to help you reach out to more donors, through social media, email, or even directly from our platform. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonorOutreach;
