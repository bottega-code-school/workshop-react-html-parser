import * as React from "react";

const logo = require("../../static/assets/images/logo.png");

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__content">
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
