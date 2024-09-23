import React, { useState } from 'react'
import './WelcomeSignup.css';
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'

const WelcomeSignup = ({setActiveSignupPage}) => {
  const Nav = useNavigate()
  const [loading, setLoading] =useState(false)

  // const moveBtn=()=>{

  //   setLoading(!loading)
  //   setTimeout(()=>{
  //     setLoading(false)
  //     // setActiveSignupPage("A")
  //     Nav('/login')
  //   },3000)
  // }
  return (
    <div className='welcomeSignupPage'>
      {
        loading ? <Loading/>:null
      }
      <div className='welcomesignupBox'>
        <h2>Please verify your email</h2>
        <div>
        You’re almost there! We sent you an email.
        </div>
        <div>
        Just click on the link in that email to complete your sign up If you didn’t see it, you may need to <span>check your spam</span> folder.
        </div>
        {/* <button className='welcomeBtnDashboard' onClick={moveBtn}>
          Go To Dashboard
        </button> */}
      </div>
    </div>
  )
}

export default WelcomeSignup