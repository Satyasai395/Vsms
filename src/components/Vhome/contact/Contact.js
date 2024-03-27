import React from "react";
import "./Contact.css";
import instagram from "../../Asserts/instagram.png";
import social from "../../Asserts/social.png";
import telegram from "../../Asserts/telegram.png";
import facebook from "../../Asserts/facebook.png";

function Contact() {
  return (
    <section id="contactPage">
      <div className="contact">
        <h1 className="contactPageTitle">Contact Page</h1>
        <span className="contactDesc">
          Please fill out the form to discuss any work oppurtunities.
        </span>
        <form className="contactForm">
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="your_email"
          />
          <textarea
            name="message"
            id="message"
            rows="5"
            className="msg"
            placeholder="your message..."
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <img src={instagram} alt="instagram" className="link" />
            <img src={facebook} alt="facebook" className="link" />
            <img src={social} alt="social" className="link" />
            <img src={telegram} alt="telegram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
