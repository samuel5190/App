import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Fundraising from "../../components/Fundraising/Fundraising";
import PopularCampaigns from '../../components/PopularCampaigns/PopularCampaigns';
import DonorEngagement from '../../components/DonorEngagement/DonorEngagement';
import DonorOutreach from '../../components/DonorOutreach/DonorOutreach';
import Solution from '../../components/Solution/Solution';
import OurMission from '../../components/OurMission/OurMission';
import OurPartners from '../../components/OurPartners/OurPartners';
import StartFundraising from '../../components/StartFundraising/StartFundraising';
import Footer from '../../components/Footer/Footer';
import './HomepageLayout.css';

const HomepageLayout = () => {
  return (
    <div className='page-wrapper'>
    <section className='landingpage-container'>
      <Header />
      <Hero />
      <div className='not-coloured-nav'>
        <PopularCampaigns />
        <Fundraising />
        <DonorEngagement />
        <DonorOutreach />
        <Solution />
        <OurMission />
        <StartFundraising />
        <OurPartners />
        <Footer />
      </div>
    </section>
  </div>
  );
}

export default HomepageLayout;

