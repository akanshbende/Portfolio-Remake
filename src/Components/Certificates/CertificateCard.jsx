import React from "react";
import Button1 from "../Buttons/Button1";
import Button2 from "../Buttons/Button2";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import "./certificatecard.css";
import { Link } from "react-router-dom";
function CertificateCard({
  organizationLogo,
  organizationName,
  compititionName,
  issueDate,
  credentialLink,
}) {
  return (
    <>
      <div
        className="certificate-card text-white flex   sm:w-5/12 flex-col sm:flex-row"
        style={{
          display: "flex",
          // width: "48%",
          zIndex: 30,
          border: "2px solid ",
          height: "cal(100vh-200px)",
          borderRadius: "10px",
          padding: "1rem",
          backgroundColor: "rgba(24, 24, 24, 0.5)",
          backdropFilter: "blur(5px)",
          boxShadow: "0px 5px 10px #3a3f64",
          gap: "20px",
        }}
      >
        <div className="org-logo ">
          <img
            src={organizationLogo}
            className="organizationLogo"
            alt=""
            loading="lazy"
          />
        </div>

        <div className="certificate-data ml-2.5">
          <ul className=" list w-full">
            <li className="compititionName text-800">{compititionName}</li>
            <li className="organizationName text-emerald-500">
              {organizationName}
            </li>
            <li className="issueDate text-red-600">{issueDate}</li>
            <li className="credentialLink">
              <a
                style={{
                  width: "fit-content",
                  fontSize: "1rem",
                  display: "flex",
                  padding: "4px 10px",
                  border: "2px solid",
                  borderColor: "#464d5b",
                  borderRadius: "10px",
                  color: "white",
                  alignSelf: "center",
                  gap: "5px",
                  alignItems: "center",
                  marginTop: "1rem",
                  // boxShadow: "0px 8px 15px #3a3f64",
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(0,0,0,0.3)",
                }}
                href={credentialLink}
              >
                Show Credentials
                <BsFillArrowUpRightCircleFill />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CertificateCard;
