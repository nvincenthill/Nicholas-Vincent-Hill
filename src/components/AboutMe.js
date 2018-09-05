import React from "react";
import "babel-polyfill";
import Header from "./Header";
import Ionicon from "react-ionicons";
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
              src="../images/aboutmephoto.jpg"
            />
          </div>
          <div className="about-description">
            <p className="about-description-text">
              Melody Shieh is a Consultant at Alvarez & Marsal in San Francisco,
              California. She specializes in business analytics and has
              supported clients with organizational transformation, corporate
              strategy, and operational improvement.
            </p>
            <p className="about-description-text">
            Recently at A&M, Melody supported a $60B national healthcare provider and insurer with an IT transformation from an old-world infrastructure delivery process to an outsourced “as-a-service” model. She identified a net savings opportunity of $472.1M (~35%) by determining cost drivers and duplication between capital, vendor, and staffing spend within the client's service delivery model. The results refined the client’s view of their core services and streamlined their service delivery approach across the customer value chain.
            </p>
            <p className="about-description-text">
              Previously, Melody conducted an objective discovery assessment for
              a leading national healthcare provider's outpatient scheduling
              function and delivered recommendations for a future, consolidated
              contact center location. Melody also developed an incentive
              compensation plan for the client's ~1,000 contact center agents by
              identifying key performance metrics that would drive desired
              behaviors and produce the best customer experience.
            </p>
            <p className="about-description-text">
              Melody earned a B.S. in Business Administration from the
              University of California, Berkeley and currently resides in the
              Rockridge district of Oakland, California where she enjoys urban
              gardening and cooking with her boyfriend (recipes can be found{" "}
              <a href="https://mealpanda.herokuapp.com/" target="_blank">
                {" "}
                here
              </a>).
            </p>
            <div className="about-contact">
              <Link to="/Contact/">
                <Ionicon
                  icon="ios-contact"
                  color="#222831"
                  fontSize="5em"
                  beat={false}
                  className="about-contact-button"
                />

                <p className="about-contact"> Contact Melody! </p>
              </Link>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default AboutMe;
