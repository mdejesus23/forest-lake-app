import React from "react";

import visionList from "../../helpers/visionList";

import classes from "./Vmv.module.scss";

import Card from "../../UI/Card";

const Vmv = () => {
  const listOfVision = visionList.map((vis, index) => {
    return (
      <li key={index}>
        <Card className={classes.card}>
          <img src={vis.image} alt="/" />
          <h2>{vis.title}</h2>
          <div className={classes.desContainer}>
            <p>{vis.desc}</p>
          </div>
        </Card>
      </li>
    );
  });

  return (
    <section className={classes.vision}>
      <ul className={classes.visionContainer}>{listOfVision}</ul>
    </section>
  );
};

export default Vmv;
