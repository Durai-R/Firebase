import React, { useState } from "react";
import { Offcanvas, OffcanvasHeader, Row, Col } from "react-bootstrap";
import "./styles.css";
import logoBot from "../../assets/images/greatifyTopRight.png";

const OffCanvas = ({ formData, toggleMenu }) => {
  const aModulesList = [
    { name: "School configuration", isDisabled: true, isChecked: true },
    { name: "Library", isDisabled: true, isChecked: true },
    { name: "Alumni management", isDisabled: true, isChecked: true },
    { name: "Manage PTA", isDisabled: true, isChecked: true },
    { name: "Placed students", isDisabled: true, isChecked: true },
    { name: "job profiles", isDisabled: false, isChecked: true },
    { name: "Notification management", isDisabled: false, isChecked: true },
    { name: "Visit log entry", isDisabled: false, isChecked: true },
    { name: "Placement", isDisabled: false, isChecked: true },
    { name: "Manage to do", isDisabled: false, isChecked: true },
    { name: "Teacher settlement", isDisabled: false, isChecked: true },
    { name: "Manage notes", isDisabled: false, isChecked: true },
    { name: "Manage transport", isDisabled: false, isChecked: true },
    { name: "Daily trips", isDisabled: false, isChecked: true },
    { name: "Servies", isDisabled: false, isChecked: true },
    { name: "Employees settlement", isDisabled: false, isChecked: true },
    { name: "Content management", isDisabled: false, isChecked: true },
    { name: "My dashboard", isDisabled: false, isChecked: true },
    { name: "Class management", isDisabled: false, isChecked: false },
    { name: "Student management", isDisabled: false, isChecked: false },
    { name: "Teacher management", isDisabled: false, isChecked: false },
    { name: "Admission managemant", isDisabled: false, isChecked: false },
    { name: "Parent management", isDisabled: false, isChecked: false },
    { name: "User management", isDisabled: false, isChecked: false },
    { name: "Manage transport", isDisabled: false, isChecked: false },
    { name: "Daily trips", isDisabled: false, isChecked: false },
    { name: "Servies", isDisabled: false, isChecked: false },
    { name: "Employees settlement", isDisabled: false, isChecked: false },
    { name: "Content management", isDisabled: false, isChecked: false },
    { name: "My dashboard", isDisabled: false, isChecked: false },
    { name: "Class management", isDisabled: false, isChecked: false },
    { name: "Student management", isDisabled: false, isChecked: false },
    { name: "Teacher management", isDisabled: false, isChecked: false },
    { name: "Admission managemant", isDisabled: false, isChecked: false },
    { name: "Parent management", isDisabled: false, isChecked: false },
    { name: "User management", isDisabled: false, isChecked: false },
    { name: "Manage transport", isDisabled: false, isChecked: false },
    { name: "Daily trips", isDisabled: false, isChecked: false },
    { name: "Servies", isDisabled: false, isChecked: false },
    { name: "Employees settlement", isDisabled: false, isChecked: false },
    { name: "Content management", isDisabled: false, isChecked: false },
    { name: "My dashboard", isDisabled: false, isChecked: false },
    { name: "Class management", isDisabled: false, isChecked: false },
    { name: "Student management", isDisabled: false, isChecked: false },
    { name: "Teacher management", isDisabled: false, isChecked: false },
    { name: "Admission managemant", isDisabled: false, isChecked: false },
    { name: "Parent management", isDisabled: false, isChecked: false },
    { name: "User management", isDisabled: false, isChecked: false },
    { name: "Content management", isDisabled: false, isChecked: false },
    { name: "My dashboard", isDisabled: false, isChecked: false },
    { name: "Class management", isDisabled: false, isChecked: false },
    { name: "Student management", isDisabled: false, isChecked: false },
    { name: "Teacher management", isDisabled: false, isChecked: false },
    { name: "Admission managemant", isDisabled: false, isChecked: false },
    { name: "Parent management", isDisabled: false, isChecked: false },
    { name: "User management", isDisabled: false, isChecked: false },
    { name: "Manage transport", isDisabled: false, isChecked: false },
    { name: "Daily trips", isDisabled: false, isChecked: false },
    { name: "Servies", isDisabled: false, isChecked: false },
    { name: "Employees settlement", isDisabled: false, isChecked: false },
    { name: "Content management", isDisabled: false, isChecked: false },
    { name: "My dashboard", isDisabled: false, isChecked: false },
    { name: "Class management", isDisabled: false, isChecked: false },
    { name: "Student management", isDisabled: false, isChecked: false },
    { name: "Teacher management", isDisabled: false, isChecked: false },
    { name: "Admission managemant", isDisabled: false, isChecked: false },
    { name: "Parent management", isDisabled: false, isChecked: false },
    { name: "User management", isDisabled: false, isChecked: false }
  ];
  const [formValues, setFormValues] = useState({ aModulesData: aModulesList });

  return (
    <div
      className={`offcanvas offcanvas-end ${
        Boolean(formData.email) ? "show" : ""
      } lg`}
    >
      <OffcanvasHeader closeButton onHide={toggleMenu}>
        <Offcanvas.Title>
          <div
            className="border-bottom m-0 d-flex justify-content-between "
            style={{ width: "750px" }}
          >
            <p className="fw-bold mt-4">Invite University</p>
            <img src={logoBot} className="greatifyTopRightLogo"></img>
          </div>
        </Offcanvas.Title>
      </OffcanvasHeader>
      <div className="menu">
        <form className="form">
          <h5 className="mb-4">College details</h5>
          <div className="d-flex gap-4 ms-3">
            <div className="mb-3 flex-grow-1">
              <label htmlFor="universityName" className="form-label fw-bold">
                UNIVERSITY NAME
              </label>
              <input
                type="text"
                id="universityName"
                className="form-control"
                placeholder="University Name"
              />
            </div>
            <div className="mb-3 flex-grow-1">
              <label htmlFor="curriculum" className="form-label fw-bold">
                SELECT CURRICULUM
              </label>
              <select id="curriculum" className="form-select">
                <option value="">Select</option>
                <option value="curriculum1">Curriculum 1</option>
                <option value="curriculum2">Curriculum 2</option>
                <option value="curriculum3">Curriculum 3</option>
              </select>
            </div>
          </div>

          <div className="d-flex gap-4 ms-3">
            <div className="mb-3 flex-grow-1">
              <label htmlFor="unSite" className="form-label fw-bold">
                UNVERSITY SITE
              </label>
              <input
                type="text"
                id="unSite"
                className="form-control"
                placeholder="Website link"
              />
            </div>
            <div className="mb-3 flex-grow-1">
              <label htmlFor="email" className="form-label fw-bold">
                EMAIL ADDRESS
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-between mt-1">
              <h5 className="mb-3">Activate Modules</h5>
              <div className="list-label_view ">
                <input
                  type="checkbox"
                  className="check-custom"
                  checked={false}
                />
                <label>Select all</label>
              </div>
            </div>

            <Row className="ms-2 activeMod">
              {formValues.aModulesData?.map((eachModule, index) => (
                <>
                  <Col md={4}>
                    <div className="list-label_view">
                      <input
                        type="checkbox"
                        className="check-custom"
                        onChange={(e) => {
                          const duplicateModuleList = structuredClone(
                            formValues.aModulesData
                          );
                          duplicateModuleList[index].isChecked =
                            e?.target?.checked;
                          setFormValues((preVal) => ({
                            ...preVal,
                            aModulesData: duplicateModuleList
                          }));
                        }}
                        name={formValues.aModulesData[index].name}
                        checked={formValues.aModulesData[index].isChecked}
                        disabled={formValues.aModulesData[index].isDisabled}
                      />
                      <label>{formValues.aModulesData[index].name}</label>
                    </div>
                  </Col>
                </>
              ))}
            </Row>
          </div>
          <div className="d-flex gap-4 mt-4 mb-4 border-bottom ">
            <div className="mb-3 flex-grow-1">
              <label htmlFor="smscredits" className="form-label fw-bold">
                SMS CREDITS
              </label>
              <input
                type="text"
                id="smscredits"
                className="form-control"
                placeholder="Credits"
              />
            </div>
            <div className="mb-3 flex-grow-1">
              <label htmlFor="watsappCredits" className="form-label fw-bold">
                WHATSAPP CREDITS
              </label>
              <input
                type="text"
                id="watsappCredits"
                className="form-control"
                placeholder="Credits"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4 mb-4">
            <button className="btn btn-outline-secondary bg-transparent border-1 text-black mb-3 ">
              Cancel
            </button>
            <button
              className="btn btn-outline-secondary  border-1 text-white mb-3 inviteBtn "
              style={{ backgroundColor: "#01d040" }}
            >
              Send invite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OffCanvas;
