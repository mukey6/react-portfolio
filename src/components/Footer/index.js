import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <div>
      <div>
        <footer className="d-flex flex-wrap justify-content-center">
            <div className="col-md-4 justify-content-center  d-flex">

          <a href="#">
            <i className=" ms-3 bi bi-github bi-lg " ></i>
          </a>
          <a className="ms-3 bi bi-envelope" href="#"></a>
          <a className="ms-3 bi bi-linkedin " href="#"></a>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
