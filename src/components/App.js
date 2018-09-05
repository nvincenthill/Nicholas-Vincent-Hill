import React from "react";
import NavCard from "./NavCard";
import Blurb from "./Blurb";
import Footer from "./Footer";
import Header from "./Header";

import { Fade } from "react-reveal";
import "babel-polyfill";

class App extends React.Component {
  state = {
    adjective: 0,
    verb: 0
  };

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Header
          title="Nicholas Vincent-Hill"
          icon="ios-contact"
          buttonsHidden="true"
        />
        <NavCard handleRoute={this.handleRoute} />
        <Fade>
          <div>
            <h2 className="about-tagline">
              I'm a software engineer designing and building responsive
              mobile-first web applications
            </h2>
          </div>
        </Fade>
        <Blurb />
        <Fade>
          <div>
            <h2 className="about-tagline-mobile">
              I'm an engineer designing responsive mobile-first web applications
            </h2>
          </div>
        </Fade>
        <Fade>
          <div className="recomendation-container-mobile">
            <p className="about-blurb-text-mobile">
              "Melody was always inquisitive, gave great recommendations, and
              exhibited wisdom way beyond her years. I would hire her again in a
              nanosecond!"
              <br /> <br />
              <a
                href="https://www.linkedin.com/in/melody-shieh-66456b67/detail/recommendation/write/"
                target="_blank"
                className="about-blurb-text-mobile"
              >
                Vincent K., Dang Foods CEO
              </a>
            </p>
          </div>
        </Fade>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
