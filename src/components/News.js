import React from "react";

import newsList from "../helpers/newsList";

import classes from "./News.module.scss";

const Purchase = () => {
  const listOfNews = newsList.map((news, index) => {
    return (
      <li key={index}>
        <img src={news} alt="/" />
      </li>
    );
  });

  return (
    <section className={classes.purchaseContainer}>
      <h3>NEWS AND UPDATES</h3>
      <ul className={classes.grid}>{listOfNews}</ul>
    </section>
  );
};

export default Purchase;
