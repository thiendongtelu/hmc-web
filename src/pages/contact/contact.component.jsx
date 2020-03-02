import React from "react";

import ContactForm from "../../components/contact-form/contact-form.component";
import ContactInfo from "../../components/contact-infor/contact-info.component";

import "./contact.style.scss";

const ContactPage = () => {
  return (
    <div className="contact">
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default ContactPage;
