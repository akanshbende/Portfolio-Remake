import React from "react";
import PageTitle from "../Components/PageTitle";
import Heading from "../Components/Heading/Heading";

import ResumePdf from "../Components/ResumePdf/ResumePdf.jsx";
import { Button, Container } from "@mui/material";
import Button2 from "../Components/Buttons/Button2";
import { BiSolidDownload } from "react-icons/bi";
import DisableButton from "../Components/Buttons/DisableButton";
import CertificateCard from "../Components/Certificates/CertificateCard";
import { CertificateData } from "../Data/CertificateData";
function Resume() {
  const handlePrint = () => {
    // Construct the URL to the PDF file you want to open
    const pdfUrl = "/Akansh-Bende_Resume.pdf"; // Replace with the actual path to your PDF file

    // Open the PDF in a new tab/window
    window.open(pdfUrl, "_blank");
  };
  return (
    <>
      <PageTitle title="My Resume" />
      <Heading title={"Resume"} />

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          zIndex: 30,
          border: "2px solid rgba(24, 24, 24, 0.5)",
          height: "cal(100vh-200px)",
          borderRadius: "10px",
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "rgba(24, 24, 24, 0.5)",
          backdropFilter: "blur(0px)",
          boxShadow: "0px 5px 10px #3a3f64",
        }}
      >
        <ResumePdf />
        <div className="resume-cv w-1/2 flex flex-col align-middle justify-center">
          <Button2
            title={"Download Resume"}
            icon={<BiSolidDownload />}
            onclick={handlePrint}
          />
          <DisableButton title={"Download CV"} icon={<BiSolidDownload />} />
        </div>
      </Container>

      <Heading title={"Certificates"} />

      <Container sx={{ marginTop: "2rem" }}>
        <div
          className="certificates flex flex-wrap w-full"
          style={{ gap: "1.5rem", width: "100%" }}
        >
          {CertificateData &&
            CertificateData?.map((certificate, index) => {
              return (
                <CertificateCard
                  key={index}
                  organizationLogo={certificate?.organizationLogo}
                  organizationName={certificate?.organizationName}
                  compititionName={certificate?.compititionName}
                  issueDate={certificate?.issueDate}
                  credentialLink={certificate?.credentialLink}
                />
              );
            })}
        </div>
      </Container>
    </>
  );
}

export default Resume;
