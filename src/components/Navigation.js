import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.scss";

const Navigation = (props) => {
  const toggleClass = props.toggleNav ? classes.show : classes.hide;

  return (
    <nav className={toggleClass}>
      <ul className={classes.flex}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="About"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Contact"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
