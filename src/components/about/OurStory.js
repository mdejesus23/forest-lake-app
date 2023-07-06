import React from "react";

import ForestImage2 from "../../assets/forest-lake2.jpg";

import classes from "./OurStoru.module.scss";

const OurStory = () => {
  return (
    <section className={classes.imageContainer}>
      {/* overlay */}
      <div className={classes.overlay}>
        <h1>
          <span>ABOUT</span>
          <span>FOREST LAKE</span>
        </h1>
      </div>
      <img src={ForestImage2} alt="Forest lake" />
    </section>
  );
};

export default OurStory;
