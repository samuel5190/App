import React from 'react'
import './CampaignHeader.css'
import logo from '../../assets/logo.svg'

const CampaignHeader = () => {
  return (
    <div className='fundHeaderBody'>
      <div className='fundHeaderWrapper'>
        <div className='fundHeadLogo'>
          <img src={logo} alt="" />
        </div>
        <div className='fundHeadNav'>
          <ul>
            <li>Product</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className='fundHeadBtnSide'>
          <button className='headLoginBtn'>Login</button>
          <button className='headSignUpBtn'>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default CampaignHeader