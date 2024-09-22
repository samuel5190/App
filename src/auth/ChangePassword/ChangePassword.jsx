import React, { useState } from "react";
import "./ChangePassword.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import logo from '../../assets/logo.svg';
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const Nav = useNavigate()
  return (
    <div className="loginBody">
      <div className="ChangeLogoSec">
        <img src={logo} alt="" />
      </div>
      <div className="formSec">
        <div className="formBox">
          <div className="formWrapper">
            <div className="loginText">
              <h2>Change Password</h2>
              <p>Update your password.</p>
            </div>
            <div className="ChangeInputHolder">
              Old Password
              <div className="loginUpInput">
                {show ? (
                  <input type="password" className="pass inp" />
                ) : (
                  <input type="text" className="pass inp" />
                )}
                <span>
                  {show ? (
                    <BsEye size={20} onClick={() => setShow(false)} />
                  ) : (
                    <BsEyeSlash size={20} onClick={() => setShow(true)} />
                  )}
                </span>
              </div>
            </div>
            <div className="ChangeInputHolder">
              New Password
              <div className="loginUpInput">
                {show ? (
                  <input type="password" className="pass inp" />
                ) : (
                  <input type="text" className="pass inp" />
                )}
                <span>
                  {show ? (
                    <BsEye size={20} onClick={() => setShow(false)} />
                  ) : (
                    <BsEyeSlash size={20} onClick={() => setShow(true)} />
                  )}
                </span>
              </div>
            </div>
            <div className="ChangeInputHolder">
              Confirm New Password
              <div className="loginUpInput">
                {show ? (
                  <input type="password" className="pass inp" />
                ) : (
                  <input type="text" className="pass inp" />
                )}
                <span>
                  {show ? (
                    <BsEye size={20} onClick={() => setShow(false)} />
                  ) : (
                    <BsEyeSlash size={20} onClick={() => setShow(true)} />
                  )}
                </span>
              </div>
            </div>
            <button className="loginBtn" onClick={()=>Nav('/resetpassword')}>Save Changes</button>
          </div>
        </div>
        {/* <div>©2024 KindRaise, Inc. All rights reserved</div> */}
      </div>
    </div>
  );
};

export default ChangePassword;
