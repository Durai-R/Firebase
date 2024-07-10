import React from "react";
import "./styles.css";
import profileImage from "../../assets/images/profile.jpg"; // Replace with your profile image path
import greenImage from "../../assets/images/green.jpg"; // Replace with your profile image path
import { FaSearch } from "react-icons/fa";

const HeaderBar = () => {
  return (
    <div className="headerBar">
      <div className="userName">Welcome, Super Admin</div>
      <div className="searchandProfile">
        <div className="searchContainer">
          <FaSearch className="searchIcon" />
          <input type="text" placeholder="Search" className="searchInput" />
        </div>
        <img className="profileIcon" src={greenImage} alt="Green Image" />
        <img className="profileIcon" src={profileImage} alt="Profile" />
      </div>
    </div>
  );
};

export default HeaderBar;
