import React from "react";
import PasswordImage from "../../assets/images/small/password.jpg";
// import WeatherApp from '../../assets/images/small/weather.jpg'

const Projects = () => {
  return (
    <div id="projects">
      <div className="container" >
        <div className="row">
          <div className="col">
            <img src={PasswordImage} width={"50%"}></img>
            Projects
          </div>
          <div className="col">
            <img src={PasswordImage} width={"50%"}></img>
            Projects
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={PasswordImage} width={"50%"}></img>
            Projects
          </div>
          <div className="col">
            <img src={PasswordImage} width={"50%"}></img>
            Projects
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={PasswordImage} width={"50%"}></img>
            Projects
          </div>
          <div className="col">
            <img src={PasswordImage} width={"50%"}></img>
            Projects
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
