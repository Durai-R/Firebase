import React, { useState } from "react";
import TableComponent from "../TableComponent";
import ModalComponent from "../ModalComponent";
import "./style.css";

const University = () => {
  const [formData, setFormData] = useState({
    universityName: "",
    curriculum: "",
    universitySite: "",
    email: ""
  });

  const setFormDataStyle = (data) => {
    setFormData(data);
    document.body.style.overflow = "hidden";
  };

  const toggleMenu = () => {
    setFormData({
      universityName: "",
      curriculum: "",
      universitySite: "",
      email: ""
    });
    document.body.style.overflow = "scroll";
  };
  return (
    <div className="university">
      <h1>Manage universities</h1>
      <div className="">
        <TableComponent setFormData={setFormDataStyle}></TableComponent>
      </div>
      <ModalComponent {...{ formData, toggleMenu }} />
    </div>
  );
};

export default University;
