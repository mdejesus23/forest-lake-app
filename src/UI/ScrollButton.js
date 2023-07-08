import React from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import classes from "./ScrollButton.module.scss";

const ScrollButton = (props) => {
  const buttonClass = props.onShowButton ? classes.show : classes.hide;

  return (
    <button
      className={`${classes.button} ${buttonClass}`}
      onClick={props.onScrollToTop}
    >
      <ArrowUpwardIcon />
    </button>
  );
};

export default ScrollButton;
