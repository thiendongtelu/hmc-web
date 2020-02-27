import React from "react";

import ProjectCard from "../../components/project-card/project-card.component";

import pj1 from '../../assets/image/project/pj1.jpg';
import pj2 from '../../assets/image/project/pj2.jpg';
import pj3 from '../../assets/image/project/pj3.jpg';
import pj4 from '../../assets/image/project/pj4.jpg';
import pj5 from '../../assets/image/project/pj5.jpg';
import pj6 from '../../assets/image/project/pj6.jpg';

import "./project.style.scss";

const ProjectContainer = () => {
  return (
    <div className="project-container">
      <h2>DỰ ÁN</h2>
      <div className='projects'>
        <ProjectCard bg={pj1} name='Graduation Ceremony' />
        <ProjectCard bg={pj2} name='Hội trại K62' />
        <ProjectCard bg={pj3} name='Chào tân k64' />
        <ProjectCard bg={pj4} name='Bách Khoa một chuyện tình...' />
        <ProjectCard bg={pj5} name='Hội trại k64' />
        <ProjectCard bg={pj6} name='Thanh xuân, tớ và cậu' />
      </div>
    </div>
  );
};

export default ProjectContainer;
