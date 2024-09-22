import React from 'react'
import First from '../../assets/first.png'
import './OurTeam.css'

const OurTeam = () => {
  return (
    <>
    <div className="team-container">
 <div className="team-text">
 <h1>Our Story</h1>
 <p>From a Training Hub to a Wave of Change</p>
</div>
 <div className="team-image">
 <img src={First} alt="Our Partners" />
</div>
</div>
    </>
  )
}

export default OurTeam