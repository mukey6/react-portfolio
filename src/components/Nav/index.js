import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavMenu } from "./navMenu";

const Nav = ({ selected, setSelection }) => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <div className="sticky-top ">
      <div className=" justify-content-center header ">
        {/* <h1 className=" text-center">Muktar Ahmed</h1> */}
        <nav className="">
          <ul className="nav justify-content-center">
            {NavMenu.map((item, i) => {
              return (
                <li key={i} className={item.clName}>
                  <Link
                    className="nav-link active"
                    to={item.url}
                    onClick={() => {
                      setSelection(item.url);
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
            <a className="nav-link active" href="https://drive.google.com/file/d/1GSnyQs44bKMHHdkayedukOBeY8u_oPL9/view?usp=sharing" target="_blank">
            Resume
            </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
