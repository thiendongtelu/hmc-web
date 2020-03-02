import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./contact-form.style.scss";

const ContactForm = () => {
  return (
    <form className="contact-form-container">
      <h3>Liên hệ ngay!</h3>
      <div className="contact-form">
        <div className="contact-form-input">
          <input type="text" placeholder="Your name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Title" name="title" />
        </div>
        <div className="contact-form-text">
          <textarea placeholder="Content" rows="6" cols="40" name="content" />
        </div>
      </div>
      <CustomButton>Liên hệ</CustomButton>
    </form>
  );
};

export default ContactForm;
