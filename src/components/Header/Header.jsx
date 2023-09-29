import React from "react";
import "../../style/Header.scss";
import logo from "./Untitled_logo_1_free-file.jpeg";
export default function Header() {
  return (
    <div className="header container">
      <div className="logo">
        <img src={logo} alt="cards" className="logo" />
      </div>
      <nav>
        <ul className="navigation">
          <li>learn english</li>
          <li>vocabulary</li>
          <li>grammar</li>
          <li>resources</li>
        </ul>
      </nav>
      <div className="contacts">
        <a href="tel:+78000000000">+7(800)-000-00-00</a>
      </div>
    </div>
  );
}
