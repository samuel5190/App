import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import logo from '../../assets/logo.svg';
import Loading from '../../components/Loading/Loading';
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser, userRole, userToken } from "../../global/slice";
import toast, { Toaster } from "react-hot-toast";
// import { useDispatch } from "react-redux";

const Login = () => {
  const Nav = useNavigate();
  const [show, setShow] = useState(true);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const Login =()=>{
    if (!email || !password)  {
      toast.error("details is required")
    } else {
      setLoading(true)
      const url = "https://kindraise.onrender.com/api/v1/login"
      const data = {email, password}
      axios.post(url, data)
      .then((res)=>{
        console.log(res)
        toast.success(res?.data?.info)
        dispatch(addUser(res?.data?.data))
        dispatch(userToken(res?.data?.token))
        dispatch(userRole(res?.data?.data?.role))
        Nav('/dashboard')
        setLoading(false)

      })
      .catch((err)=>{
        console.log(err?.response?.data?.info)
        toast.error(err?.response?.data?.info)
        setLoading(false)
      })
    }
  }
  
  return (
    <>
    <div className="loginBody">
      <div className="logoSec">
        <img src={logo} alt="" />
      </div>
      <div className="formSec">
        <div className="formBox">
          <div className="formWrapper">
            <div className="loginText">
              <h2>Welcome Back, Change-Maker!</h2>
              <p>Log in to continue your journey of making a difference</p>
            </div>
            <div className="inputHolder">
              Email Address
              <input type="text" className="loginUpInput inp" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="inputHolder">
              Password
              <div className="loginUpInput">
                <input type={show ? 'password' : 'text'} className="pass inp" onChange={(e)=>setPassword(e.target.value)}/>
                <span>
                  {show ? (
                    <BsEye size={20} onClick={() => setShow(false)} />
                  ) : (
                    <BsEyeSlash size={20} onClick={() => setShow(true)} />
                  )}
                </span>
              </div>
            </div>
            <div className="forgetPassword" onClick={() => Nav("/resetpassword")}>Forget Password?</div>
            <button className="loginBtn" onClick={Login} >
            {loading ? "Loading..." : 'Sign in'}
          </button>
            <div className="sighUpCreateAcc">
              Don't have a kindRaise account? <span onClick={()=>Nav(-1)}>Create one</span>
            </div>
          </div>
        </div>
        <div className="rights">©2024 KindRaise, Inc. All rights reserved</div>
      </div>
    </div>
    <Toaster/>
    </>
  );
};

export default Login;