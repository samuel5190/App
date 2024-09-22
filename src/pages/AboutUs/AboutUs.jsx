import React from 'react'
import './AboutUs.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import OurPartners from '../../components/OurPartners/OurPartners'
import OurTeam from '../../components/OurTeam/OurTeam'



const AboutUs = () => {
  return (
    <>
    <div className='about-container'>
    <div className='about-inner'>
    <Header/>
    <div className='about-section'>
      <div className='about-header'>
        <div className='about-content'>
            <h1>Revolutionizing<span> Social Impact</span></h1>
            <p>We empower people and organizations to support and nurture the causes and communities they care about.</p>
        </div>
      </div>
    </div>
    </div>
    </div>
    <OurTeam/>
    <OurPartners/>
    <Footer/>
    </>
  )
}

export default AboutUs