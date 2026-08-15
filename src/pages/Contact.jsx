import React, { useState } from "react";
import PageTitle from "../Components/PageTitle";
import Heading from "../Components/Heading/Heading";
import { Container } from "@mui/material";
import { Forminit } from "forminit";

const forminit = new Forminit();

const FORM_ID = "ch2zdzh56w2";

function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const { data, error } = await forminit.submit(FORM_ID, formData);

    if (error) {
      console.error(error);
      setStatus("error");
      setError(error.message || "Something went wrong. Please try again.");
      return;
    }

    console.log("Submission successful:", data);

    setStatus("success");
    form.reset();
  };

  return (
    <>
      <PageTitle title="Contact" />
      <Heading title="Contact" />

      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <div
          className="contact-wrapper flex-col sm:flex-row sm:h-full"
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
            zIndex: 30,
            height: "calc(100vh - 200px)",
            width: "100%",
            backgroundColor: "rgba(24, 24, 24, 0.5)",
            backdropFilter: "blur(10px)",
            boxShadow: "0px 5px 10px #3a3f64",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {/* Image */}
          <div className="contact-img h-1/2 rounded-t-lg sm:w-1/2 sm:h-full sm:rounded-l-xl">
            <img
              src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=2070&q=80"
              alt="Contact"
              loading="lazy"
              className="w-full h-full object-cover rounded-t-lg sm:rounded-l-xl"
            />
          </div>

          {/* Form */}
          <div className="contact-form my-4 sm:my-4 w-full sm:w-1/2 flex items-center justify-center text-white">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-[80%]"
            >
              {/* Name */}
              <input
                type="text"
                name="fi-sender-fullName"
                placeholder="Enter Your Name"
                required
                className="p-3 rounded-lg bg-black/30 border border-gray-600 text-white outline-none"
              />

              {/* Email */}
              <input
                type="email"
                name="fi-sender-email"
                placeholder="Enter Your Email"
                required
                className="p-3 rounded-lg bg-black/30 border border-gray-600 text-white outline-none"
              />

              {/* Message */}
              <textarea
                name="fi-text-message"
                placeholder="Enter Your Message"
                required
                rows="6"
                className="p-3 rounded-lg bg-black/30 border border-gray-600 text-white outline-none resize-none"
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  width: "max-content",
                  fontSize: "1.2rem",
                  display: "flex",
                  padding: "5px 15px",
                  border: "2px solid #464d5b",
                  borderRadius: "10px",
                  color: "white",
                  alignSelf: "center",
                  gap: "5px",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
                className="contact-submit-button"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>

              {/* Success */}
              {status === "success" && (
                <p className="text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}

              {/* Error */}
              {status === "error" && (
                <p className="text-red-400 text-center">{error}</p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;
