import React from "react";
import "./contact.css"
import { BsEnvelope, BsChatText, BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="bg-even" >
      <div className="container contact-container">
        <h2>Get in Touch</h2>
        <h1>Contact Me</h1>
        <div className="contact-content">
          <div className="contact-decoration">
            <BsEnvelope className="icon mail-icon" />
            <BsChatText className="icon chat-icon" />
            <BsTelephone className="icon phone-icon" />
          </div>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name*" required />
            <input type="text" name="email" placeholder="Your Email*" required />
            <textarea type="text" name="message" rows="10" placeholder="Your Message*" required ></textarea>
            <button type="submit" className="btn btn-shadow">Send Message</button>
          </form>
        </div>
      </div>
    </section >
  )
}

export default Contact;
