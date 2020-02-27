import React from "react";

import "./member-card.style.scss";

const MemberCard = props => {
  return (
    <div className="member-card-container">
      <div className="bg-image">
        <img src={props.imageUrl} alt="member" />
      </div>
      <div className='member-card-inner'>
          <h3 className='member-position'>{props.position}</h3>
          <p className='member-name'>{props.name}</p>
      </div>
    </div>
  );
};

export default MemberCard;