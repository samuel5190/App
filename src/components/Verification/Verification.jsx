import React from 'react'
import './Verification.css'

const Verification = () => {
  return (
    <div className='verificationBody'>
      <h3>Account Verification</h3>

      <div className='verificationBenefits'>
        <div>Verify your non profits to unlock this benefits:</div>
        <ul>
          <li>Verification badge on your campaign pages</li>
          <li>Fund deposited into your bank account on a regular schedule</li>
        </ul>
      </div>
      
      <div className='verificationEmailBox'>
        <div className='verificationEmailHead'>
          <div>Verify your email</div>
          <span>Required</span>
        </div>
        <div className='verifyEmailMessage'>
          click the button below to verify your email: example@gmail.com.
          <br />
          Didn't get it? Check your spam folder
        </div>
        <button className='verityBtnEmail'>Send verification email</button>
      </div>

      <div className='verificationEmailBox'>
        <div className='verificationEmailHead'>
          <div>Verify your non profit</div>
          <span>Required</span>
        </div>
        <div className='verifyNumBox'>
          <div>RC number</div>
          <input type="text" placeholder='RC111000' />
        </div>
        <div className='verifyNumBtnBox'>
          <p>Upload Cerificate of incoporation</p>
          <button className='verityBtnEmail'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Verification