import React from "react";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";
import SideBar from "../../components/SideBar/SideBar";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="userLayoutBody">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="otherSide">
        <div className="userLayoutHeader">
          <DashboardHeader />
        </div>
        <div className="holder">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
