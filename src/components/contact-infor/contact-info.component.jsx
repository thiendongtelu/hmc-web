import React from "react";

import ContactInforItem from "../contact-infor-item/contact-info-item";

import "./contact-info.style.scss";

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h3>Thông tin liên hệ</h3>
      <div className="content">
        <ContactInforItem type="environment">
          <p>
            Trường Đại học Bách Khoa Hà Nội. <br></br>
            Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội.
          </p>
        </ContactInforItem>
        <ContactInforItem type="mail">
          <p>Email: hustmediaclub@gmail.com</p>
        </ContactInforItem>
        <ContactInforItem type="phone">
          <p>Điện thoại: 0375.800.833</p>
        </ContactInforItem>
      </div>
    </div>
  );
};

export default ContactInfo;