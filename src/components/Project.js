import React from "react";
import { Fade, Slide, Zoom } from "react-reveal";

class Project extends React.Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    let frontendTechStack = this.props.frontEndStack.map((tech, idx) => {
      return <i className={`devicon-${tech} colored devicon`} key={idx} />;
    });
    let backendTechStack = this.props.backEndStack.map((tech, idx) => {
      if (tech === "firebase") {
        return (
          <img
            src="../images/firebase-logo-built_black.svg"
            alt="not found"
            className="devicon-firebase devicon"
            key={idx}
          />
        );
      } else {
        return <i className={`devicon-${tech} colored devicon`} key={idx} />;
      }
    });
    let toolingTechStack = this.props.tools.map((tech, idx) => {
      return <i className={`devicon-${tech} colored devicon`} key={idx} />;
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
          <div className="project-tech-stack-container">
            <div className="project-stack-container">
              <div className="project-stack-type">FRONTEND</div>
              {frontendTechStack}
            </div>
            <div className="project-stack-container">
              {backendTechStack}
              <div className="project-stack-type">BACKEND</div>
            </div>
            <div className="project-stack-container">
              {toolingTechStack}
              <div className="project-stack-type">TOOLS</div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Project;
