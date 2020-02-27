import React from "react";

import CarouselContainer from "../../container/carousel-container/carousel.component";
import CardContainer from '../../container/card-container/card-container.component';
import ProjectContainer from '../../container/project-container/project.container';
import MemberContainer from '../../container/member-container/member-container.component';

import './home.style.scss';

const HomePage = () => {

  return (
    <div className="home">
      <CarouselContainer />
      <CardContainer />
      <ProjectContainer />
      <MemberContainer />
    </div>
  );
};

export default HomePage;
