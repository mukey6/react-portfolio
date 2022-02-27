import React from "react";
import { NavMenu } from "./navMenu";

const Nav = ({options, selected, setSelection}) => {
  return (
    <div>
      <div className=" justify-content-center header">
        <h1 className=" text-center">
          Muktar Ahmed
        </h1>
        <nav>
          <ul className="nav justify-content-center">
            {NavMenu.map((item, i) => {
              return (
                <li key={i} className={item.clName}>
                  <a className="nav-link active" href={item.url} onClick={()=>{
                      console.log(item.url)
                      setSelection(item.url)
                      // can go to projects but cant come back tomhome
                  }}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
