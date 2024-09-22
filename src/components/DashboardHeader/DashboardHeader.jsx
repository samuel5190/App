import React, { useState } from "react";
import "./DashboardHeader.css";
import { useNavigate } from "react-router-dom";
import { BsQuestionCircle } from "react-icons/bs";
import Logo from "../../assets/logo.svg";
import Icon from "../../assets/Icon.svg";
import Menu from "../Menu/Menu";
import 'animate.css';
import { HiMenuAlt3 } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi";
import { useSelector } from "react-redux";

const DashboardHeader = () => {
  const [show, setShow] = useState(false);
  // console.log(show);
  const {organizationName} = useSelector((state)=>state.kindraise.user)
  console.log(organizationName)

  const Nav = useNavigate();
  return (
    <div className="headerBody">
      <div className="headerWrapper">
        <div className="iconSide" onClick={()=>Nav('/dashboard')}>
          <img src={Logo} alt="" />
        </div>
        <div className="menuSide" onClick={() => setShow(!show)}>
          {show ? <BiMenuAltLeft size={25}/> : <HiMenuAlt3 size={25}/>}
        </div>
        {
          show ? 
        <div className="dropDown">
          <div><Menu setShow={setShow}/></div>
        </div>: null
        }
        <div className="headerSighUp">
          <div className="headerBox">
            <BsQuestionCircle size={15} />
          </div>
          <div className="headerBox">
            <div className="greenCircle"></div>{organizationName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
