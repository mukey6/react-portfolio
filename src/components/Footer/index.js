import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer-length">
      <div>
        <footer className="d-flex flex-wrap justify-content-center">
            <div className="col-md-4 justify-content-center  d-flex">

          <a href="https://github.com/mukey6">
            <i className=" ms-3 bi bi-github  footer" ></i>
          </a>
          <a href="mailto:muk.ahmed13@gmail.com">
            <i className="ms-3 bi bi-envelope footer" >

            </i>
          </a>
          <a href="https://www.linkedin.com/in/muktar-ahmed-226730148/">
            <i  className="ms-3 bi bi-linkedin footer ">

            </i>
          </a>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
