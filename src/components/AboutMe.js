import React from "react";
import "babel-polyfill";
import Header from "./Header";
import { Link } from "react-router-dom";
import NavCard from "./NavCard";

class AboutMe extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Header title="About Me" icon="md-person" />
        <NavCard handleRoute={this.handleRoute} />
        <div className="about-me">
          <div className="about-me-headshot-container">
            <img
              className="about-me-headshot"
              alt="did not load"
              src="../images/headshot1.png"
            />
          </div>
          <div className="about-description">
            <p className="about-description-text">
              I'm a full-stack software engineer who enjoys building scalable,
              responsive, mobile-first web applications.
            </p>
            <p className="about-description-text">
              In a prior life as a trader, I hedged interest rate risk for
              mortgage originators with mortgage-backed securities. I've also
              traded commodities, equities, and derivatives.
            </p>
            <p className="about-description-text">
              As a developer, I use my capital markets experience to identify
              and solve business problems with beautiful web applications.
            </p>
            <p className="about-description-text">
              When I’m not on the job, I enjoy traveling the world and urban
              gardening with my girlfriend Melody.
            </p>
            <p className="about-description-text">
              I earned a B.S. in Business Administration from the University of
              California, Berkeley. I have experience working with: React,
              MongoDB, Express, Node.js, Git, Docker, Webpack, SQL,
              HTML5/CSS/JS, AWS (S3, EC2, Route 53, CloudFront), Jest/Enzyme,
              Mocha/Chai, Redux, jQuery, Heroku, CircleCI, p5.js, SQLite, MySQL,
              PostgresSQL, Grunt, and Linux.
            </p>
            {/* <p className="about-description">
              <span className="about-hook">
                I'd love to work with you and add value to your firm.
              </span>
            </p> */}
            {/* <div className="about-contact">
              <Link to="/Contact/">
                <Ionicon
                  icon="ios-contact"
                  color="#222831"
                  fontSize="5em"
                  beat={false}
                  className="about-contact-button"
                />

                <p className="about-contact"> Contact Nick! </p>
              </Link>
            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
