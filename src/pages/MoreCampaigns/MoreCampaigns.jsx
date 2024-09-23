import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Period from '../../assets/period.png';
import Ads from '../../assets/ads.png';
import WaterSupply from '../../assets/water-supply.png';
import BackToSchool from '../../assets/back-to-school.png';
import './MoreCampaigns.css';  
import { SlArrowDown } from 'react-icons/sl';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Search from '../../components/Search/Search';


const MoreCampaigns = () => {
    const [campaign, setCampaigns] = useState([]);  
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 campaigns  
  const [searchTerm, setSearchTerm] = useState(""); // State for search term  
  const navigate = useNavigate();  
  const dispatch = useDispatch(); 
    const Nav = useNavigate()

    
  useEffect(() => {  
    window.scrollTo(0, 0);  

    AOS.init({  
      duration: 2000,  
    });  
  }, []);  

  useEffect(() => {  
    const url = "https://kindraise.onrender.com/api/v1/getallcampaigns";  

    // Perform the GET request  
    axios  
      .get(url)  
      .then((res) => {  
        console.log(res?.data?.allCampaigns, "all campaigns");  
        setCampaigns(res?.data?.allCampaigns);  
        // dispatch(allCampaigns(res?.data?.allCampaigns));  
      })  
      .catch((err) => {  
        console.log(err); // Set the error message  
      });  
  }, [dispatch]);  

  const handleClick = () => {  
    setVisibleCount((prevCount) => {  
      // Show 3 more campaigns, but limit it to the length of campaign  
      const newCount = prevCount + 6;  
      return newCount > campaign.length ? campaign.length : newCount;  
    });  
  };  

  const handleSignup = () => {  
    navigate("/signup");  
  };  

  // Filtered campaigns based on search term  
  const filteredCampaigns = campaign.filter((Mcampaign) =>  
    Mcampaign.story.toLowerCase().includes(searchTerm.toLowerCase())  
  );
    return (
        <section className="more-campaigns">  
      <div className="more-campaigns-header">  
        <h1>Discover Fundraising Campaigns</h1>  
      </div>  
      <div className="container">  
        
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>  

      <div className="campaign-container">  
        {filteredCampaigns.slice(0, visibleCount).map((Mcampaign) => {  
            const percent = (Mcampaign.totalRaised / Mcampaign.Goal) * 100;  
          return (  
            <div  
              className="Mcampaigns-card"  
              key={Mcampaign.id}  
              data-aos="fade-up"  
            >  
              <img  
                src={Mcampaign.profilePic}  
                alt={Mcampaign.story}  
                className="Mcampaigns-image"  
                  onClick={()=>navigate(`/fundraising-page/${Mcampaign.ev}`)}
              />  
              <div className="Mcampaigns-info">  
                <h2 className="Mcampaigns-title">{Mcampaign.story}</h2>  
                <p className="Mcampaigns-description">{Mcampaign.subtitle}</p>  
                <p className="Mcampaigns-donors">  
                  {Mcampaign.supporters} Donors  
                </p>  
                <progress  
                  className="Mcampaigns-progress"  
                  value={Mcampaign.totalRaised}  
                  max={Mcampaign.Goal}  
                ></progress>  
                <div className="Mcampaigns-stats">  
                  <p className="Mcampaigns-raised">  
                    ₦{Mcampaign.totalRaised}/ <span>{Mcampaign.Goal}</span> raised  
                  </p>  
                  <p className="Mcampaigns-funded">  
                    {percent}% funded  
                  </p>  
                </div>  
              </div>  
            </div>  
          );  
        })}  
      </div>  

      {visibleCount < filteredCampaigns.length && ( // Adjust to show more if there are more filtered campaigns  
        <div className="explore-button-wrapper">  
          <button onClick={handleClick} className="explore-campaigns-button">  
            <span>Show more</span> <SlArrowDown />  
          </button>  
        </div>  
      )}  

      <div className="ads-img">  
        <img src={Ads} alt="" />  
        <div className="explore-text">  
          <h1>Create your campaign</h1>  
          <p>  
            KindRaise is the best place to fundraise, whether you are an  
            individual, group, or organization.  
          </p>  
          <div className="more-button-container" data-aos="zoom-in">  
            <button onClick={handleSignup} className="more-button">  
              Start fundraising  
            </button>  
          </div>  
        </div>  
      </div>  
    </section>
    );
};

export default MoreCampaigns;
