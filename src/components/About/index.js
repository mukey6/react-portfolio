import React from "react";
import HeaderImage from "../../assets/images/small/me.jpg";
import Typical from "react-typical";
// import image from "../../assets/images/background/background.jpg";
import './about.css'
import Projects from "../Projects";
import Contact from "../Contact";
const Header = () => {
  return (
    <div id="about" className="container" >
 
      <div
        className="d-flex justify-content-center row row-cols-2 about-me "
        // style={{
        //   backgroundImage: `url(${image})`,
        // }}
      >
          <img
          src={HeaderImage}
          className="rounded-pill row-cols-2"
          style={{ width: "30%" }}
          alt="cover"
        />
             <Typical
        className="text-center d-flex align-items-center  "
        steps={["HI MY NAME IS MUKTAR AHMED", 3000, "A FULL STACK DEV!", 2000]}
        loop={Infinity}
        wrapper="p"
      />
        <p className="d-flex text-center d-flex align-items-center w-50 row-cols-2 ">
          A full stack developer, proficient in web development. My specialties
          are web design, full-stack web development, HTML, CSS, JavaScript,
          JQuery, Bootstrap, Node, MySQL, Inquirer, and Express.js. I have over
          7 years of experience in finance which allowed me to develop my
          knowledge of a companys finances and client-service relationships.
        </p>

      
      </div>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Header;
