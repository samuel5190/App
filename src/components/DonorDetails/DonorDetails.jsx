import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './DonorDetails.css'
import { IoIosArrowBack } from 'react-icons/io';

const DonorDetails = () => {
  const Nav = useNavigate()

  const location = useLocation();  
  const { person } = location.state;
  // <h1>{person.name}</h1>  
  // <p>Email: {person.email}</p>  
  // <p>Contribution: {person.contribution}</p>  
  // <p>Contact Since: {person.contact_since}</p>  
  // <p>Campaign: {person.campaign}</p>  
  // <p>Message: {person.message}</p>  

  return (
    <div className='persiceDetailsBody'>  
      <div className='preciseDetailsHead' onClick={()=>Nav(-1)}><IoIosArrowBack  />Back to contacts</div>
      <div className='preciseDetailsBox'>
        <div className='preciseDetailsName'>{person.name}</div>
        <div>contact since</div>
        <div>02 Aug 2023</div>
      </div>
      <div className='preciseMoreBox'>
        <div className='preEmailSendBox'>
          <h4>helo</h4>
          <div>{person.email}</div>
          <hr className='botmLine' />
          <div className='sendEmailBox'>
            <textarea name="" id="" placeholder='Send a thank you message to your supporter'></textarea>
          </div>
          <div className='preEmailBtnBox'>
            <button>Send</button>
          </div>
        </div>
        <div className='preDetailsDataBox'>hello</div>
      </div>
    </div>
  )
}

export default DonorDetails