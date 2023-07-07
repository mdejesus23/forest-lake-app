import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../assets/fl_logo.png";
import Modal from "../UI/Modal";

import classes from "./Header.module.scss";

import Navigation from "./Navigation";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setShowNav(false);
  }, [location]);

  const menuButtonHandler = () => {
    setShowNav((prev) => !prev);
  };

  const hideCartHandler = () => {
    setShowNav(false);
  };

  return (
    <header className={classes.header}>
      <img src={Logo} alt="Forest lake logo" />
      <Navigation toggleNav={showNav} />
      <div className={classes.menuButtonContainer}>
        <button className={classes.menuButton} onClick={menuButtonHandler}>
          <MenuIcon />
        </button>
      </div>
      {showNav && <Modal onHideNav={hideCartHandler} />}
    </header>
  );
};

export default Header;
