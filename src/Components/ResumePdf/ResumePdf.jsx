import React, { useState } from "react";

import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import { BiSolidDownload } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import resumeImage from "../../../public/ResumeAkansh.png"; // Replace with your resume image file path
import Button1 from "../Buttons/Button1";
import "./ResumeModel.css";
function Resume() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    bgcolor: "background.paper",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
    width: "max-content",
    height: "90vh",
    fontSize: "1.2rem",
    margin: "1rem",
    padding: "10px",
    border: "2px solid gray",
    borderRadius: "10px",
    color: "white",
    alignSelf: "center",
    boxShadow: "0px 8px 15px #3a3f64",
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(0,0,0,0.5)",
    gap: "10px",
  };

  //download button
  const handleDownload = () => {
    // Construct the URL to the PDF file you want to download
    const pdfUrl = "../../../public/Akansh-Bende_Resume.pdf"; // Replace with the actual path to your PDF file

    // Create a temporary <a> element to initiate the download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Akansh-Bende_Resume.pdf"; // Specify the filename for the downloaded file

    // Trigger a click event on the <a> element to start the download
    link.click();
  };

  return (
    <div className="w-2/3 m-1 p-2">
      <div
        className="flex align-middle justify-center "
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      >
        <img src={resumeImage} alt="Resume" className="object-contain w-1/2" />
      </div>
      <div className="resume-download flex "></div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex align-middle justify-between text-white m-2 w-full px-2">
            <span>
              <h1 className="text-3xl text-bold">Resume</h1>
            </span>

            <span
              onClick={handleClose}
              className="close text-2xl hover:text-gray-600 hover:cursor-pointer"
            >
              <AiOutlineClose />
            </span>
          </div>
          <div
            className="scrollable-content"
            style={{
              maxHeight: "80vh",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              className="flex align-middle justify-center"
              onClick={handleOpen}
            >
              <img src={resumeImage} alt="Resume" className=" bg-center " />
            </div>

            <Button1
              title={"Download PDF"}
              onclick={handleDownload}
              icon={BiSolidDownload}
            ></Button1>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Resume;
