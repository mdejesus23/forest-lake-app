import React from "react";

import Logo from "../../assets/forest-logo.jpg";

import classes from "./AboutLogo.module.scss";

const AboutLogo = () => {
  return (
    <section className={classes.logoContainer}>
      <img src={Logo} alt="/" />
      <article>
        <p>
          The logo is derived from the infinity symbol; here at Forest Lake we
          interpret this symbol as a representation of LOVE, LEGACY, and
          GRATITUDE. The two loops further reinforce the idea of one generation
          cradling and caring for the next – the imagery mirroring that of a
          parent and child. The gold color is intended to resonate these very
          values that we treasure while the green portion signifies serenity and
          peace.
        </p>

        <p>
          The transition to this logo also signifies a change in the Forest Lake
          business. From the topographic representation of the park in the
          previous logo, the current brand stands for more than just a memorial
          park. The icon represents a more holistic business that includes
          chapels, as well as plans. As the business grows to provide a more
          complete representation of a family’s legacy and the celebration of a
          person’s life beyond death, so is the importance of representing this
          in the Brand’s design.
        </p>
      </article>
    </section>
  );
};

export default AboutLogo;
