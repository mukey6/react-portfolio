import React from "react";
import HeaderImage from "../../assets/images/background/bck.jpg";
const Header = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
          <p className="d-flex text-center d-flex align-items-center" >
          A full stack developer, proficient in web development. My specialties are web design, full-stack web
development, HTML, CSS, JavaScript, JQuery, Bootstrap, Node, MySQL, Inquirer, and Express.js. I have
over 7 years of experience in finance which allowed me to develop my knowledge of a company’s finances
and client-service relationships.
          </p>
<img src={HeaderImage} className="my-5" style={{ width: "50%" }} alt="cover" />

      </div>
    </div>
  );
};

export default Header;
