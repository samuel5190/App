import React, { useState } from 'react';
import './NpoSignup.css';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NpoSignup = ({ setActiveSignupPage }) => {
  const [organizationName, setOrganizationName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [passwordErrorUpper, setPasswordErrorUpper] = useState(false);
  const [passwordErrorLow, setPasswordErrorLow] = useState(false);
  const [passwordErrorNumber, setPasswordErrorNumber] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const Nav = useNavigate()


  const formData = {
    organizationName,
    registrationNumber,
    phoneNumber,
    email,
    password,
  };

  const [show, setShow] = useState(false);
  console.log(show)

  // Password validation logic
  const handlePassword = (e) => {
    const newData = e.target.value;
    setPassword(newData);

    // Check if the password is at least 8 characters
    if (newData.length >= 8) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }

    // Check for lowercase letters
    if (/[a-z]/.test(newData)) {
      setPasswordErrorLow(false);
    } else {
      setPasswordErrorLow(true);
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(newData)) {
      setPasswordErrorUpper(false);
    } else {
      setPasswordErrorUpper(true);
    }

    // Check for numbers
    if (/\d/.test(newData)) {
      setPasswordErrorNumber(false);
    } else {
      setPasswordErrorNumber(true);
    }
  };

  const handleBtn = () => {
    if (!organizationName || !registrationNumber || !phoneNumber || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    // Password validation
    if (!passwordCheck || passwordErrorLow || passwordErrorUpper || passwordErrorNumber) {
      toast.error("Password does not meet the required criteria");
      return;
    }

    if (!termsChecked) {
      toast.error("You must agree to the terms and conditions");
      return;
    }

    setLoading(true);
    axios
      .post("https://kindraise.onrender.com/api/v1/sign-up", formData)
      .then((res) => {
        toast.success("Account created successfully!"); // Toast notification
        setLoading(false);
        setActiveSignupPage("D");
      })
      .catch((err) => {
        setLoading(false);
        const errorMessage = err.response?.data?.message || "An error occurred";
        toast.error(errorMessage);
      });
  };

  return (
    <>
      <div className='npoSignUpBody'>
        <div className='signupLoginBox'>
          Already have an account? <span onClick={() => Nav('/login')}> Sign in</span>
        </div>
        <div className='indSignupInputBox'>
          <h1 className='indSignupQusBox'>Tell us about yourself</h1>
          <div className='indInputHoldBox'>
            Non-profit Name
            <input type="text" onChange={(e) => setOrganizationName(e.target.value)} />
          </div>
          <div className='indInputHoldBox'>
            RC Number
            <input type="text" onChange={(e) => setRegistrationNumber(e.target.value)} />
          </div>
          <div className='indInputHoldBox'>
            Email Address
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='indInputHoldBox'>
            Phone Number
            <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div className='indInputHoldBox'>
            Password
            <div className='signupInputClone'>
              <input
                type={show ? 'text' : 'password'}
                onChange={handlePassword}  // Password validation on input
              />
              {
                show ? 
                  <BsEyeSlash cursor="pointer" onClick={() => setShow(false)} /> :
                  <BsEye cursor="pointer" onClick={() => setShow(true)} />
              }
            </div>
          </div>
          <div className='signupPassHintBox'>
            Your Password must have:
            <span>
              At least 8 characters, 
              <span style={passwordErrorUpper ? { color: 'red' } : { color: 'green' }}>
                1 uppercase letter
              </span>, 
              <span style={passwordErrorLow ? { color: 'red' } : { color: 'green' }}>
                1 lowercase letter
              </span>, and 
              <span style={passwordErrorNumber ? { color: 'red' } : { color: 'green' }}>
                1 number
              </span>
            </span>
          </div>
          <div className='TermsBox'>
            <input type="checkbox" onChange={() => setTermsChecked(!termsChecked)} /> 
            I have read and agree to the Terms and Use and Private Policy
          </div>
          <button className='signupIndCreateBtn' onClick={handleBtn} disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </div>
        <div className='mediaSignupLoginBox'>
          Already have an account?<span onClick={() => setActiveSignupPage('/login')} style={{ marginLeft: '10px', color: '#690896', cursor: 'pointer' }}>Sign in</span>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default NpoSignup;
