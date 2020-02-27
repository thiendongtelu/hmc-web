import React from "react";

import "./footer.style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about-us">
        <h3>VỀ CHÚNG TÔI</h3>
        <p>
          Câu lạc bộ truyền thông Hust Media Club là câu lạc bộ trực thuộc đoàn
          thanh niên trường đại học Bách Khoa Hà Nội. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quod sunt nemo esse vitae at velit,
          tenetur nostrum nesciunt aspernatur neque molestiae rem voluptates ut
          a aliquam, reprehenderit atque culpa vero?
        </p>
      </div>
      <div className="contact">
          <h3>
              THÔNG TIN LIÊN HỆ
          </h3>
          <p>
              <span>Văn phòng: </span> Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội. <br></br>
              <span>Điện thoại: </span> 0375.800.833 <br></br>
              <span>Email: </span> hustmediaclub@gmail.com<br></br>
          </p>
      </div>
    </div>
  );
};

export default Footer;
