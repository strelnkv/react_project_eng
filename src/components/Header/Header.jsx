import React from "react";
import "../../style/Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-no-background.png";

export default function Header() {
  return (
    <div className="header container">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <nav>
        <ul className="navigation">
          <Link to="/">
            <li>Table</li>
          </Link>
          <Link to="/cards">
            <li>Cards</li>
          </Link>
          <li>Grammar</li>
          <li>Resources</li>
        </ul>
      </nav>
      <div className="contacts">
        <a href="tel:+78000000000">+7(800)-000-00-00</a>
      </div>
    </div>
  );
}
