import React, { useState } from "react";
import classes from "./Home.module.css";

import illustration1 from "../images/illustration-1.svg";
import illustration2 from "../images/illustration-2.svg";
import testimonial from "../images/avatar-testimonial.jpg";
import iconarrow from "../images/icon-arrow.svg";
import bgcurve from "../images/bg-curve-desktop.svg";
import quote from "../images/icon-quotes.svg";

const Home = () => {
  const [display, setDisplay] = useState("");
  const [emailForm, setEmailForm] = useState(classes.emailForm);

  const handleEmailSubmit = () => {
    setDisplay("Please check your email");
    setEmailForm(classes.emailCheck);
  };
  return (
    <body className={classes.body}>
      <section>
        <div className={classes.container}>
          <div className={classes.splitReverse}>
            <div>
              <h1>
                <p className={classes.heroHeading}>
                  All your files in one secure
                </p>
                <p className={classes.heroHeading}>
                  location, accessible anywhere.
                </p>
              </h1>
              <p className={classes.heroP}>
                Fylo stores your most important files in one secure location.
                Access them wherever you need, share and collaborate with
                friends, family, and co-workers.
                <div className={classes.split}>
                  <div>
                    <input
                      className={emailForm}
                      type="e-mail"
                      placeholder="Enter your email..."
                    />
                    <p className={classes.emailSent}>{display}</p>
                  </div>
                  <div>
                    <button onClick={handleEmailSubmit}>Get Started</button>
                  </div>
                </div>
              </p>
            </div>
            <div>
              <div>
                <img alt="" src={illustration1} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <img alt="" className={classes.curve} src={bgcurve} />
      <section className={classes.features2bg}>
        <div className={classes.container}>
          <div className={classes.splitReverse}>
            <div>
              <h1 className={classes.feature2heading}>
                Stay productive, wherever you are
              </h1>
              <p className={classes.featuresp}>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className={classes.featuresp}>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>
              <p className={classes.greenlink}>
                <div>
                  <a href="/#">See how Fylo works</a>
                </div>
                <div>
                  <img alt="" className={classes.iconarrow} src={iconarrow} />
                </div>
              </p>
              <div className={classes.testimonialContainer}>
                <img alt="" src={quote} />
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className={classes.ceo}>
                  <div>
                    <img
                      alt=""
                      className={classes.testimonialAvatar}
                      src={testimonial}
                    />
                  </div>
                  <div>
                    <p className={classes.ceoname}>Kyle Burton</p>
                    <p className={classes.ceotitle}>Founder & CEO, Huddle</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img alt="" src={illustration2} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={classes.earlyAccess}>
          <div className={classes.container}>
            <div className={classes.split}>
              <div className={classes.earlyAccessDescription}>
                <h2>Get early access today</h2>
                <p>
                  It only takes a minute to sign up and our free starter tier is
                  extremely generous. If you have any questions, our support
                  team would be happy to help you.
                </p>
              </div>
              <div className={classes.earlyAccessForm}>
                <div>
                  <input
                    className={emailForm}
                    type="e-mail"
                    placeholder="email@example.com"
                  />
                  <p className={classes.earlyAccessP}>{display}</p>
                </div>
                <div>
                  <button onClick={handleEmailSubmit}>
                    Get Started For Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Home;
