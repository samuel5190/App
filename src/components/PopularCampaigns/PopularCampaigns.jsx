import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './PopularCampaigns.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import axios from 'axios';

const PopularCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        const fetchCampaigns = async () => {
            try {
                const response = await axios.get('https://kindraise.onrender.com/api/v1/getallcampaigns');
                console.log(response, "data");
                setCampaigns(response.data.campaigns.slice(0, 3)); // Limit to 3 campaigns
            } catch (error) {
                console.log(error)
                setErr(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCampaigns();
    }, []);

    const handleCampaignClick = (campaignId) => {
        // Navigate to the fundraising page for the clicked campaign
        navigate(`/fundraising/${campaignId}`);
    };

    const handleExploreClick = () => {
        navigate('/explore-campaigns'); 
    };

    return (
        <section className='popular-campaigns'>
            <div className='popular-campaigns-header' data-aos="fade-up">
                <h1>Popular Campaigns</h1>
                <p>Driven by what matters to you</p>
            </div>
            <div className='campaigns-list'>
                {loading ? (
                    <p>Loading campaigns...</p>
                ) : err ? (
                    <p>{err}</p>
                ) : (
                    campaigns.map((campaign) => (
                        <div 
                            className='campaign-card' 
                            key={campaign.id} 
                            data-aos="fade-up" 
                            style={{ cursor: 'pointer' }} 
                            onClick={() => navigate(`/fundraising-page/${campaign.ev}`)}> 
                            <img src={campaign.profilePic} alt={campaign.title} className='campaign-image' />        
                            <div className='campaign-details'>
                                <h2 className='campaign-title'>{campaign.title}</h2>
                                <p className='campaign-description'>{campaign.subtitle}</p>
                                <p className='campaign-donors'>{campaign.supporters} Donors</p>
                                <progress className='campaign-progress' value={campaign.totalRaised} max={campaign.Goal}></progress>
                                <div className='campaign-stats'>
                                    <p className='campaign-raised'>₦{campaign.totalRaised.toLocaleString()} raised</p>
                                    <p className='campaign-funded'>{((campaign.totalRaised / campaign.Goal) * 100).toFixed(0)}% funded</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="explore-button-container" data-aos="zoom-in">
                <button onClick={handleExploreClick} className="explore-button">Explore Campaigns</button>
            </div>
        </section>
    );
};

export default PopularCampaigns;
