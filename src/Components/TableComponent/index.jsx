import React, { useState } from "react";
import "./TableComponent.css";

const TableComponent = ({ setFormData }) => {
  const invitations = [
    {
      sno: 1,
      universityName: "Harvard University",
      email: "contact@harvard.edu",
      invitedDate: "2023-01-15"
    },
    {
      sno: 2,
      universityName: "Stanford University",
      email: "info@stanford.edu",
      invitedDate: "2023-02-20"
    },
    {
      sno: 3,
      universityName: "Massachusetts Institute of Technology",
      email: "admissions@mit.edu",
      invitedDate: "2023-03-25"
    },
    {
      sno: 4,
      universityName: "University of Oxford",
      email: "inquiries@ox.ac.uk",
      invitedDate: "2023-04-10"
    },
    {
      sno: 5,
      universityName: "University of Cambridge",
      email: "info@cam.ac.uk",
      invitedDate: "2023-05-05"
    }
  ];

  return (
    <div>
      <table style={{ border: "unset" }}>
        <thead>
          <tr
            style={{
              borderRadius: "10px",
              marginBottom: "10px !important"
            }}
            className="mb-4"
          >
            <th
              style={{
                color: "#cb9872",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                borderRight: "1px solid #ccc"
              }}
            >
              S.No
            </th>
            <th style={{ color: "#cb9872", borderRight: "1px solid #ccc" }}>
              University Name
            </th>
            <th style={{ color: "#cb9872", borderRight: "1px solid #ccc" }}>
              Email Address
            </th>
            <th
              style={{
                color: "#cb9872",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px"
              }}
            >
              Invited Date
            </th>
          </tr>
        </thead>
        <tbody>
          {invitations.map((invitation) => (
            <React.Fragment key={invitation.sno}>
              {
                <tr
                  style={{
                    height: "8px"
                  }}
                ></tr>
              }
              <tr
                className="rounded"
                style={{
                  backgroundColor: "#dddd",
                  cursor: "pointer"
                }}
                onClick={() => setFormData(invitation)}
              >
                <td
                  style={{
                    borderBottomLeftRadius: "10px",
                    borderTopLeftRadius: "10px"
                  }}
                >
                  {invitation.sno}
                </td>
                <td>{invitation.universityName}</td>
                <td>{invitation.email}</td>
                <td
                  style={{
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "10px"
                  }}
                >
                  {invitation.invitedDate}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
