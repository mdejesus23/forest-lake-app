import React, { useState, useEffect } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import ForestImage1 from "../assets/forest-lake1.jpg";
import ForestImage2 from "../assets/forest-lake2.jpg";
import ForestImage3 from "../assets/forest-lake3.jpg";

import classes from "./Hero.module.scss";

const arrOfImages = [
  { imgSrc: ForestImage1, caption: "I WANT TO BUY A LOT" },
  { imgSrc: ForestImage2, caption: "FOREVER RESTING IN SCENE SANCTUARIES" },
  {
    imgSrc: ForestImage3,
    caption: "CREATING LASTING LEGACIES IN PEACEFUL PERPETUITY",
  },
];

const Hero = () => {
  const [activeImageNum, setActiveImageNum] = useState(0);

  const length = arrOfImages.length;

  useEffect(() => {
    const autoSlide = setTimeout(() => {
      nextSlide();
    }, 4000);
    // anonymous function is use as a clean up function. to clear the setTimeout delay 4000
    return () => {
      console.log("CLEANUP");
      clearTimeout(autoSlide);
    };
  });

  const nextSlide = () => {
    // index of image array will add 1 to switch to the next elem/image.
    // if reach the last image in the array, it will go to the first image with the index [0]
    setActiveImageNum(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    // if the image array reach first elem or index 0 ? it will go to the last element/image in the array.
    setActiveImageNum(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };

  // this code use to check if the imageslider array has 0 or not a valid array. if true it will stop executing the below line of code.
  if (!Array.isArray(arrOfImages) || arrOfImages.length <= 0) {
    return null;
  }

  const sliderImages = arrOfImages.map((currSlide, ind) => {
    return (
      <li
        key={ind}
        className={
          ind === activeImageNum ? "currentSlide active" : "currentSlide"
        }
      >
        {ind === activeImageNum && (
          <>
            <h1>{currSlide.caption}</h1>
            <img src={currSlide.imgSrc} className={classes.image} alt="/" />
          </>
        )}
      </li>
    );
  });

  return (
    <section className={classes["image-slider"]}>
      <div className={classes.overlays}>
        <button className={classes.left} onClick={prevSlide}>
          <ArrowBackIosNewIcon />
        </button>
        <button className={classes.right} onClick={nextSlide}>
          <ArrowForwardIosIcon />
        </button>
      </div>

      <ul>{sliderImages}</ul>
    </section>
  );
};

export default Hero;
