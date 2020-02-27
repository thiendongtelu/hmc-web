import React from "react";

import "./project-card.style.scss";

const ProjectCard = props => {
  return (
    <div className="project-card-container">
      <div className="image">
        <img src={props.bg} alt="project" />
      </div>
      <p className="project-name">{props.name}</p>
    </div>
  );
};

export default ProjectCard;
