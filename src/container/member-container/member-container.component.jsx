import React, { useState } from "react";
import { Icon } from "antd";

import MEMBER_DATA from "./member-data";

import MemberCard from "../../components/member-card/member-card.component";

import "./member-container.style.scss";

const MemberContainer = () => {
  const [left, setLeft] = useState(500);

  const toRight = right => {
    console.log(left);

    const MemberContainer = window.document.getElementsByClassName(
      "member-container"
    );

    if (right) {
      
      setLeft(left + 500);
      if (left >= 1000) setLeft(1000);
      MemberContainer[0].scroll({
        top: 0,
        left: left,
        behavior: "smooth"
      });
    } else {
      setLeft(left - 500);
      if (left <= 0) setLeft(0);
      MemberContainer[0].scroll({
        top: 0,
        left: left,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="member-background">
      <h2>ĐỘI NGŨ NHÂN SỰ</h2>
      <div className="member-container">
        {Object.keys(MEMBER_DATA).map((key, index) => (
          <MemberCard key={index} {...MEMBER_DATA[key]} />
        ))}
      </div>
      <div className="arrow">
        <Icon
          className="left-arrow"
          type="caret-left"
          theme="filled"
          onClick={() => toRight()}
        />
        <Icon
          className="right-arrow"
          type="caret-right"
          theme="filled"
          onClick={() => toRight(true)}
        />
      </div>
    </div>
  );
};

export default MemberContainer;
