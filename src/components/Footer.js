import React from "react";
import classes from "./Footer.module.css";

import logo from "../images/logo-footer.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div>
          <img className={classes.logo} alt="" src={logo} />

          <div className={classes.split}>
            <div>
              <img src={phone} alt="" />
            </div>
            <div>
              <p>Phone: +1-543-123-4567</p>
            </div>
          </div>
          <div className={classes.split}>
            <div>
              <img src={email} alt="" />
            </div>
            <div>
              <p>example@fylo.com </p>
            </div>
          </div>
        </div>
        <div>
          <ul className={classes.navlist}>
            <div className={classes.list1}>
              <li>
                <a href="/#"> About Us</a>
              </li>
              <li>
                <a href="/#"> Jobs</a>
              </li>
              <li>
                <a href="/#"> Press</a>
              </li>
              <li>
                <a href="/#">Blog</a>
              </li>
            </div>
          </ul>
        </div>
        <div>
          <ul className={classes.navlist}>
            <div className={classes.list2}>
              <li>
                <a href="/#"> Contact Us</a>
              </li>
              <li>
                <a href="/#"> Terms</a>
              </li>
              <li>
                <a href="/#">Privacy</a>
              </li>
            </div>
          </ul>
        </div>
        <div>
          <ul className={classes.socialIcons}>
            <li>
              <a href="/#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
