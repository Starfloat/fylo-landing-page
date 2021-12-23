import React from "react";
import classes from "./Navigation.module.css";

import logo from "../images/logo.svg";

const Navigation = () => {
  return (
    <nav className={classes.appNav}>
      <div className={classes.logo}>
        <img alt="" src={logo} />
      </div>
      <ul className={classes.navlist}>
        <a href="/#">
          <li className={classes.listItem}>Features</li>
        </a>
        <a href="/#">
          <li className={classes.listItem}>Team</li>
        </a>
        <a href="/#">
          <li className={classes.listItem}>Sign In</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
