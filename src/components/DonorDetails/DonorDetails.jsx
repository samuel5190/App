import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './DonorDetails.css'
import { IoIosArrowBack } from 'react-icons/io';
import axios from 'axios';
import { useSelector } from 'react-redux';

const DonorDetails = () => {
  const Nav = useNavigate()
  const token = useSelector((state) => state.kindraise.token); 
  const [message, setmessage] = useState('')
  console.log(message)


  const location = useLocation();  
  const { person } = location.state;
  const id = person?._id
  console.log(id)

  const sendEmail = ()=>{
    const url = `https://kindraise.onrender.com/api/v1/send-message/${id}`
    axios
      .post(url, {message}, {headers: { Authorization: `Bearer: ${token}` }}) 
      .then((res)=>{
        console.log(res)
       
      })
      .catch((err)=>{
        console.log(err)

      })
    // alert('Error')
  }


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
            <textarea onChange={(e)=>setmessage(e.target.value)} name="" id="" placeholder='Send a thank you message to your supporter'></textarea>
          </div>
          <div className='preEmailBtnBox'>
            <button onClick={sendEmail}>Send</button>
          </div>
        </div>
        <div className='preDetailsDataBox'>hello</div>
      </div>
    </div>
  )
}

export default DonorDetails