import React, { useState } from "react";
import PageTitle from "../Components/PageTitle";
import Heading from "../Components/Heading/Heading";
import { Container, Stack } from "@mui/material";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <PageTitle title="Contact" />
      <Heading title={"Contact"} />
      <Container
        sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}
      >
        <div
          className="contact-wrapper  h-full"
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
            zIndex: 30,
            border: "0px solid rgba(24, 24, 24, 0.5)",
            height: "cal(100vh-200px)",
            width: "100%",
            marginTop: "1rem",

            backgroundColor: "rgba(24, 24, 24, 0.5)",
            backdropFilter: "blur(10px)",
            boxShadow: "0px 5px 10px #3a3f64",
          }}
        >
          <div className="contact-img w-1/2 h-full">
            <img
              src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
          <div className="contact-form w-1/2 flex align-middle justify-center  text-white">
            <Stack
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
                color: "white",
              }}
              autoComplete="off"
            >
              <form
                action="https://getform.io/f/cb3ff207-76e1-4c0b-a150-ff72104a18b4"
                method="POST"
                style={{
                  gap: "1rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Your Name"
                  type="text"
                  name="name"
                  required
                />
                <input
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Your Email"
                  type="email"
                  required
                />
                <input
                  id="outlined-basic"
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Your Message"
                  style={{ height: "150px", textAlign: "initial" }}
                  name="message"
                  required
                />
                <button
                  style={{
                    width: "max-content",
                    // height: "60px",
                    // lineHeight: "1.2rem",
                    fontSize: "1.2rem",
                    display: "flex",
                    padding: "5px 15px",
                    border: "2px solid",
                    borderColor: "#464d5b",
                    borderRadius: "10px",
                    color: "white",
                    alignSelf: "center",
                    gap: "5px",
                    alignItems: "center",

                    // boxShadow: "0px 8px 15px #3a3f64",
                    // backdropFilter: "blur 5px",
                    backgroundColor: "rgba(0,0,0,0.3)",
                  }}
                  type="submit"
                  title={"Submit"}
                >
                  Submit
                </button>
              </form>
            </Stack>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;
