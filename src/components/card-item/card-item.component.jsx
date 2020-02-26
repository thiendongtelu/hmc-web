import React from "react";
import { Icon } from "antd";

import CustomButton from "../custom-button/custom-button.component";

import "./card-item.style.scss";

const CardItem = props => {
  return (
    <div className="card-container">
      <div className="card-bg-image">
        <img src={props.bg} alt="card" />
      </div>
      <div className="card-inner">
        <Icon {...props} theme='filled'/>
        <p className="sub">{props.sub}</p>
        <div className="button">
        <CustomButton>Xem thêm</CustomButton>
      </div>
      </div>
    </div>
  );
};

export default CardItem;
