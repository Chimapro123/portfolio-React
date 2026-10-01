
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaTimes, FaEnvelope } from "react-icons/fa";

function Footer() {

  // Controls whether the message box is open or closed
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  // Stores the information entered by the visitor
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handles changes made inside the form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Sends the visitor's message through EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these three values with your EmailJS information
emailjs
  .send(
    "service_be7j6yl",
    "template_rw73vq1",
    {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      message: formData.message,
    },
    "OXEzPw4WQnbwGfE8G"
  )
  .then(() => {
    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setIsMessageOpen(false);
  })
  .catch((error) => {
    console.error("EmailJS ERROR:", error);
    alert(`Email failed: ${error.text || error.message || "Unknown error"}`);
  });
  };

  return (
    <footer className="footer">

      {/* =========================
          FOOTER BRAND
      ========================== */}
      <div className="footer-brand">

        {/* Clicking the logo takes the user back to Home */}
        <a href="#home" className="footer-logo">
          <span className="logo-D">D</span>
          <span className="logo-tech">tech</span>
        </a>

        <p>
          Building modern and meaningful digital experiences{" "}
          <span className="main-back">.</span>
        </p>
      </div>


      {/* =========================
          FOOTER NAVIGATION
      ========================== */}
      <nav className="footer-nav">

        {/* Navigation links */}
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

      </nav>


      {/* =========================
          COPYRIGHT
      ========================== */}
      <div className="footer-bottom">

        <a   href="https://wa.me/2348038897836"
          // target="_blank"
          rel="noopener noreferrer"
       ><p>© 2026 Dtech. All rights reserved.</p></a>

        {/* Back to top button */}
        <a href="#home" className="back-to-top">
          ↑
        </a>

      </div>


      {/* ==================================================
          FLOATING MESSAGE BUTTON
          This stays visible while the user scrolls.
      =================================================== */}
      <button
        className="floating-message-button"
        onClick={() => setIsMessageOpen(true)}
        aria-label="Message Dtech"
      >
        <FaEnvelope />
        <span>Message Me</span>
      </button>


      {/* ==================================================
          MESSAGE BOX
          This appears when the visitor clicks "Message Me".
      =================================================== */}
      {isMessageOpen && (
        <div className="message-box">

          {/* Message box header */}
          <div className="message-header">

            <h3>Send Me a Message</h3>

            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsMessageOpen(false)}
              aria-label="Close message form"
            >
              <FaTimes />
            </button>

          </div>


          {/* =========================
              MESSAGE FORM
          ========================== */}
          <form onSubmit={handleSubmit}>

            {/* Visitor's name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            {/* Visitor's email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Visitor's message */}
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />

            {/* Submit button */}
            <button type="submit" className="send-message-button">
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>
      )}

    </footer>
  );
}

export default Footer;