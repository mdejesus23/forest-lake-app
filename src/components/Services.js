import React from "react";

import serviceList from "../helpers/serviceList";

import classes from "./Services.module.scss";
// import Card from "../UI/Card";

const Services = () => {
  const listOfService = serviceList.map((service) => {
    const { title, desc, image } = service;
    return (
      <li className={classes.flex}>
        <div className={classes.details}>
          <img src={image} alt="/" />
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className={classes.controls}>
          <button>Read more</button>
        </div>
      </li>
    );
  });

  return (
    <section className={classes.serviceContainter}>
      <ul className={classes.grid}>{listOfService}</ul>
    </section>
  );
};

export default Services;
