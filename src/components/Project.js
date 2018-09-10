import React from "react";
import { Fade } from "react-reveal";

class Project extends React.Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    let techStack = this.props.stack.map(tech => {
      if (tech === "firebase") {
        return (
          <img
            src="../images/firebase_logo.png"
            alt="not found"
            className="devicon-firebase"
          />
        );
      } else {
        return <i className={`devicon-${tech} colored devicon`} />;
      }
    });
    return (
      <Fade>
        <div className="project">
          <a href={this.props.url}>
            <img
              className="project-image"
              src={this.props.imageSource}
              alt="Did not load"
            />
            <h2 className="project-title"> {this.props.name} </h2>
          </a>
          <h3 className="project-description">{this.props.description}</h3>
          {techStack}
        </div>
      </Fade>
    );
  }
}

export default Project;
