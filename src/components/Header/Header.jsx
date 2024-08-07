import React from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";
import { navItem } from "../../constants/enums";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          {navItem.map((item, i) => (
            <li key={i} className="li">
              <a href="">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
