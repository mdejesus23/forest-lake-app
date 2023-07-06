import React from "react";

import ForestImage1 from "../assets/forest-lake1.jpg";

import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={classes.imageContainer}>
      {/* overlay */}
      <div className={classes.overlay}>
        <h1>
          <span>I WANT TO</span>
          <span>BUY A LOT</span>
        </h1>
        <p>Invest in a lot from Forest Lake Memorial Parks.</p>
        <p>The country's top neighborhood memorial park.</p>
      </div>
      <img src={ForestImage1} alt="Forest lake" />
    </section>
  );
};

export default Hero;
