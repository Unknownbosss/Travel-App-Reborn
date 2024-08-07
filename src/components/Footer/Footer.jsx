import React from "react";
import {footerItems} from '../../constants/enums.js'
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        {footerItems.map((item, i) => (
          <li key={i}>
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
