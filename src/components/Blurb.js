import React from "react";
// import RestartingTypist from "./RestartingTypist";
import { Fade } from "react-reveal";

class Blurb extends React.Component {
  state = {
    image1: "../images/headshot1.png",
    image2: "../images/headshot1.png",
    currentImageNumber: 1,
    currentImage: "../images/headshot1.png"
  };

  updatePhoto() {
    let current = this.state.currentImageNumber;
    if (current === 1) {
      this.setState({ currentImage: this.state.image2 });
      this.setState({ currentImageNumber: 2 });
    } else {
      this.setState({ currentImage: this.state.image1 });
      this.setState({ currentImageNumber: 1 });
    }
  }

  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <div
          className="about-headshot-container"
          onMouseEnter={() => this.updatePhoto()}
          onMouseLeave={() => this.updatePhoto()}
        >
          <img
            className="about-headshot"
            alt="did not load"
            src={this.state.currentImage}
          />

          <div className="about-blurb">
            <p className="about-blurb-text">
              "Melody was always inquisitive, gave great recommendations, and
              exhibited wisdom way beyond her years. I would hire her again in a
              nanosecond!"
            </p>
            <p className="about-blurb-text-footer">
              Vincent K., Dang Foods CEO
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Blurb;
