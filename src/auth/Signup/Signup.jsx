import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import "./Signup.css";
import { BiArrowBack } from "react-icons/bi";
import UserSignup from "../UserSignup/UserSignup";
import IndividualSignup from "../IndividualSignup/IndividualSignup";
import NpoSignup from "../NpoSignup/NpoSignup";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import WelcomeSignup from "../WelcomeSignup/WelcomeSignup";

const Signup = () => {
  const navigate = useNavigate(); 

  const goToHomepage = () => {
    navigate("/"); 
  };

  const [activeSignupPage, setActiveSignupPage] = useLocalStorage("A");

  const renderPage = () => {
    switch (activeSignupPage) {
      case "A":
        return <UserSignup setActiveSignupPage={setActiveSignupPage} />;
      case "B":
        return <IndividualSignup setActiveSignupPage={setActiveSignupPage} />;
      case "C":
        return <NpoSignup setActiveSignupPage={setActiveSignupPage} />;
      case "D":
        return <WelcomeSignup setActiveSignupPage={setActiveSignupPage} />;
      default:
        return <UserSignup setActiveSignupPage={setActiveSignupPage} />;
    }
  };

  useEffect(() => {
  }, []);

  return (
    <section>
      <div className="signup-container">
        <div className="signup-inner">
          <div className="signupBackArrow">
            {activeSignupPage === "A" ? null : (
              <span onClick={() => setActiveSignupPage("A")}>
                <BiArrowBack style={{ marginRight: '8px' }} />
                Back
              </span>
            )}
          </div>
          <div className="signupLogoBox">
            <img src={Logo} alt="Logo" onClick={() => setActiveSignupPage("A")} />
          </div>
          <div className="signupTextBox">
            <h1>Create a KindRaise account</h1>
            <p>Amplify your mission with our easy-to-use tools.</p>
          </div>
        </div>

        <div className="signup-inputs">{renderPage()}</div>
      </div>
    </section>
  );
};

export default Signup;
