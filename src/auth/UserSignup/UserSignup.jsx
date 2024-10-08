import React from 'react'
import './UserSignup.css'
import { useNavigate } from 'react-router-dom'
import { BiHeart } from 'react-icons/bi'
import { GrNext } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'

const UserSignup = ({setActiveSignupPage}) => {
  
  const Nav = useNavigate()
  return (
    <div className='userSignUpBody'>
      <div className='signupLoginBox'>
        Already have an account? <span onClick={()=>Nav('/login')}> Log in</span>
      </div>
      <div className='signupUserSelectBox'>
        <div className='signupQus'>Who are you?</div>
        <div className='signupUserBox' onClick={()=>setActiveSignupPage("C")}>
          <div className='signupUserIconBox'><BiHeart size={20}/></div>
          <div className='signupUserInfo'>
            <h3>Non-profit</h3>
            <p>I work for a non-profit organization, and i would like to create a fundraising account for them</p>
          </div>
          <div><GrNext/></div>
        </div>

        {/* <div className='signupUserBox' onClick={()=>setActiveSignupPage("B")}>
        <div className='signupUserIconBox'><BsPerson size={20}/></div>
          <div className='signupUserInfo'>
            <h3>Individual</h3>
            <p>I would like to create a fundraising account for myself or <br />another individual</p>
          </div>
          <div><GrNext/></div>
        </div> */}
      </div>
      <div className='mediaSignupLoginBox'>
        Already have an account?<span onClick={()=>Nav('/login')}>Log in</span>
      </div>
    </div>
  )
}

export default UserSignup