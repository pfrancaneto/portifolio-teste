import React from "react";
import "./header.css";
import ME from '../../assets/me.png';

import CTA from './Cta/CTA';
import HeaderSocials from "./HeaderSocials/HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Pedro França</h1>
        <h5 className="text-light">Frontend Development</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
