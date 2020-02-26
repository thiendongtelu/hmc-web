import React from "react";

import { Icon } from "antd";

import "./header-info.style.scss";

const HeaderInfo = props => {
  return (
    <div className={ props.border ? "info-container border" : "info-container"}>
      <div className="info-icon">
        <Icon type={props.icon} {...props}></Icon>
      </div>
      <div className="info-word">
        <div className="info-title">
          <h3>{props.title}</h3>
        </div>
        <div className="info-subtitle">{props.sub}</div>
      </div>
    </div>
  );
};

export default HeaderInfo;
