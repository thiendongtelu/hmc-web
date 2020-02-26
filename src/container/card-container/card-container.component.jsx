import React from "react";

import CardItem from "../../components/card-item/card-item.component";

import card1 from "../../assets/image/card1.jpg";
import card2 from "../../assets/image/card2.jpg";
import card3 from "../../assets/image/card3.jpg";

import "./card-container.style.scss";

const CardContainer = () => {
  return (
    <div className="card">
      <CardItem
        type="home"
        sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
      corporis perspiciatis illum harum rem blanditiis."
        bg={card1}
      />
      <CardItem
        type="pie-chart"
        sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
      corporis perspiciatis illum harum rem blanditiis."
        bg={card2}
      />
      <CardItem
        type="camera"
        sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
      corporis perspiciatis illum harum rem blanditiis."
        bg={card3}
      />
    </div>
  );
};

export default CardContainer;
