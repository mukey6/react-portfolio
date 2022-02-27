import React from "react";
import PasswordImage from "../../assets/images/small/password.jpg";
// import WeatherApp from '../../assets/images/small/weather.jpg'
import { ProjectMenu } from "./projectsMenu";

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <div className="row">
          {ProjectMenu.map((project, i) => {
            return (
              <div className="col-6 card" key={i}>
                <img 
                  
                  src={require(`../../assets/images/small/${project.image}.jpg`)}
                  width={"70%"}
                  height={"100%"}
                  alt={project.name}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

// <div className="row">
// <div className="col">
//   <img src={PasswordImage} width={"50%"}></img>
//   Projects
// </div>
// <div className="col">
//   <img src={PasswordImage} width={"50%"}></img>
//   Projects
// </div>
// </div>
// <div className="row">
// <div className="col">
//   <img src={PasswordImage} width={"50%"}></img>
//   Projects
// </div>
// <div className="col">
//   <img src={PasswordImage} width={"50%"}></img>
//   Projects
// </div>
// </div>
