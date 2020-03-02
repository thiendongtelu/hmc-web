import React from "react";

import { Icon } from "antd";

import "./contact-infor-item.style.scss";

const ContactInforItem = ({ children, ...props }) => {
  return (
    <div className="contact-infor-item">
      <Icon className="contact-icon" {...props} theme="filled" />
      <p>{children}</p>
    </div>
  );
};

export default ContactInforItem;
