import React from "react";
import NavCard from "./NavCard";
import Blurb from "./Blurb";
import Footer from "./Footer";
import Header from "./Header";

import GithubCorner from "react-github-corner";
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
        <GithubCorner
          href="https://github.com/nvincenthill"
          className="corner"
          octoColor="#222831"
          bannerColor="#EEEEEE"
          size={135}
        />
        <Header
          title="Nicholas Vincent-Hill"
          icon="ios-contact"
          buttonsHidden="true"
        />
        <NavCard handleRoute={this.handleRoute} />
        <h2 className="about-tagline">
          I'm an engineer
          <br />
          designing responsive
          <br />
          mobile-first web applications
        </h2>
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
              Vincent K., Dang Foods CEO
            </p>
          </div>
        </Fade>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
