import React from "react";
import HeaderImage from "../../assets/images/small/me.jpg";
import Typical from "react-typical";
import image from "../../assets/images/background/background.jpg";
import "./about.css";
const Header = () => {
  return (
    <div id="about" className="container">
      <Typical
        className="fs-1 d-flex justify-content-center img-fluid"
        steps={["MUKTAR AHMED", 3000, "A FULL STACK DEV!", 2000]}
        loop={Infinity}
        wrapper="p"
      />
      <div className="col">
        <img className="img-fluid" src={image}></img>
      </div>
      <div className="d-flex justify-content-center row  about-me mt-5">
        <div>
          <img
            src={HeaderImage}
            className="rounded-pill row-cols-2"
            style={{ width: "30%" }}
            alt="cover"
          />
        </div>

        <div className="d-flex justify-content-center w-55">
          <p className="d-flex text-center d-flex align-items-center w-100 row-cols-2 ">
            A full stack developer, proficient in web development. My
            specialties are web design, full-stack web development, HTML, CSS,
            JavaScript, JQuery, Bootstrap, Node, MySQL, Inquirer, and
            Express.js. I have over 7 years of experience in finance which
            allowed me to develop my knowledge of a companys finances and
            client-service relationships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
