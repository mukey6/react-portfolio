import React from "react";
import HeaderImage from "../../assets/images/small/me.jpg";
import Typical from 'react-typical'

const Header = () => {
  return (
    <div id="about">
            <Typical className="text-center"
        steps={['MUKTAR AHMED', 1000,
        'FULL STACK DEV!', 2000]}
        loop={Infinity}
        wrapper="p"
      />
      <div className="d-flex justify-content-center">
          <p className="d-flex text-center d-flex align-items-center w-50" >
          A full stack developer, proficient in web development. My specialties are web design, full-stack web
development, HTML, CSS, JavaScript, JQuery, Bootstrap, Node, MySQL, Inquirer, and Express.js. I have
over 7 years of experience in finance which allowed me to develop my knowledge of a companys finances
and client-service relationships.

          </p>
        <img src={HeaderImage} className="my-5 rounded-pill" style={{ width: "30%" }} alt="cover" />
      </div>

    </div>
  );
};

export default Header;
