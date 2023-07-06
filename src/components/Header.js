import React from "react";

import Logo from "../assets/fl_logo.png";

import classes from "./Header.module.scss";

import Navigation from "./Navigation";

function Header(props) {
  return (
    <header className={classes.header}>
      <img src={Logo} alt="Forest lake logo" />
      <Navigation />
    </header>
  );
}

export default Header;
