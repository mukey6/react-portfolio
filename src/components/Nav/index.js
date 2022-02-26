import React from "react";

const Nav = () => {
  return (
    <div>
      <div className=" justify-content-center header">
        <h1 id="about-me" className=" text-center">Muktar Ahmed</h1>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#about-me">
              About me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              {" "}
              Contact me
            </a>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default Nav;
