import * as React from "react";
import { Link } from "react-router-dom";

const logo = require("../../static/assets/images/logo.png");

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__content">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
