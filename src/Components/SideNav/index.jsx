// SideNav.js

import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNav.css";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { RiContactsBook3Line } from "react-icons/ri";
import logoBot from "../../assets/images/greatifybottom1.png";
import logo from "../../assets/images/greatifylogo.png";

const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="logoHeader">
        <img src={logo} alt="Greatify Logo" />
      </div>
      <div className="navs">
        <NavLink exact to="/" activeClassName="active">
          <MdOutlineDashboard style={{ marginRight: "5px" }} />
          Dashboard
        </NavLink>
        <NavLink to="/manageUniversity" activeClassName="active">
          <FaGraduationCap style={{ marginRight: "5px" }} />
          Manage University
        </NavLink>
        <NavLink to="/coursePlan" activeClassName="active">
          <BiNotepad style={{ marginRight: "5px" }} />
          Manage Course Plan
        </NavLink>
        <NavLink to="/services" activeClassName="active">
          <HiMiniAdjustmentsHorizontal style={{ marginRight: "5px" }} />
          Configure Curriculum
        </NavLink>
        <NavLink to="/manageEmployers" activeClassName="active">
          <RiContactsBook3Line style={{ marginRight: "5px" }} />
          Manage Employers
        </NavLink>
      </div>
      <div className="logoutContainer">
        <NavLink to="/logout" activeClassName="active">
          <FiLogOut className="logoutIcon" />
          <span className="logoutText">Log out</span>
        </NavLink>
      </div>
      <img src={logoBot} className="greatifyBotLogo"></img>
    </div>
  );
};

export default SideNav;
