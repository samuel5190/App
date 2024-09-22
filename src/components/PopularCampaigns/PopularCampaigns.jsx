import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Period from '../../assets/period.png';
import WaterSupply from '../../assets/water-supply.png';
import BackToSchool from '../../assets/back-to-school.png';
import './PopularCampaigns.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const campaigns = [
    {
        id: 1,
        image: BackToSchool,
        title: 'Sponsor 5 Children in Nigeria Get Back to School',
        description: 'Hi, I’m Noor, and I started SchoolFund to provide education to children who...',
        donors: 71,
        raised: 100450,
        funded: 65
    },
    {
        id: 2,
        image: WaterSupply,
        title: 'Bring Clean Water to Rural Communities in Lagos',
        description: 'Greetings! I’m Lola Badmus, working with WaterNow to provide clean water in...',
        donors: 44,
        raised: 75400,
        funded: 80
    },
    {
        id: 3,
        image: Period,
        title: 'Menstrual Hygiene Support for Orphanages & Girls',
        description: 'PeriodPals is sponsoring menstrual kits for girls to keep them comfortable..',
        donors: 120,
        raised: 200000,
        funded: 90
    }
];

const PopularCampaigns = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/explore-campaigns'); 
    };
    

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <section className='popular-campaigns'>
            <div className='popular-campaigns-header' data-aos="fade-up">
                <h1>Popular Campaigns</h1>
                <p>Driven by what matters to you</p>
            </div>
            <div className='campaigns-list'>
                {campaigns.map((campaign) => (
                    <div className='campaign-card' key={campaign.id} data-aos="fade-up"> 
                        <img src={campaign.image} alt={campaign.title} className='campaign-image' />        
                        <div className='campaign-details'>
                            <h2 className='campaign-title'>{campaign.title}</h2>
                            <p className='campaign-description'>{campaign.description}</p>
                            <p className='campaign-donors'>{campaign.donors} Donors</p>
                            <progress className='campaign-progress' value={campaign.funded} max="100"></progress>
                            <div className='campaign-stats'>
                                <p className='campaign-raised'>₦{campaign.raised.toLocaleString()} raised</p>
                                <p className='campaign-funded'>{campaign.funded}% funded</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="explore-button-container" data-aos="zoom-in">
                <button onClick={handleClick} className="explore-button">Explore Campaigns</button>
            </div>
        </section>
    );
};

export default PopularCampaigns;
