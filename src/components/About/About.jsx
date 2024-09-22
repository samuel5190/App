import React from "react";
import "./About.css";
import { BiEdit } from "react-icons/bi";

const About = () => {
  return (
    <div className="aboutBody">
      <h3>Organization Information</h3>
      <div className="aboutLogoBox">
        <section>logo</section>
        <div className="logoHolderAbout">
          <div className="aboutLogoContainer">H</div>
          <span>
            <BiEdit />
          </span>
        </div>
      </div>

      <div className="aboutOrgNameInputBox">
        <section>Organization Name</section> 
        <input type="text" />
      </div>

      <hr />

      <div className="aboutOrgNameInputBox">
        <section>Organization Address</section> 
        <input type="text" />
      </div>


      <div  className="aboutAddressBox">

        <div className="aboutOrgNameInputBox">
          <section>City</section>  
          <input type="text" />
        </div>
        <div className="aboutOrgNameInputBox">
          <section>State</section>  
          <input type="text" />
        </div>
      </div>

      <div className="aboutOrgNameInputBox">
        <section>Organization Contact Phone</section> 
        <input type="text" />
      </div>

      <hr />

      <div className="aboutOrgNameInputBox">
        <section>Mission Statement</section> 
        <textarea type="text" />
      </div>


      <div className="aboutSaveBtnBox">
        <button className="aboutSaveBtn">Save</button>
      </div>
      
    </div>
  );
};

export default About;
