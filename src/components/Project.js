import React from "react";
import { Fade } from "react-reveal";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
class Project extends React.Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    let frontendTechStack = this.props.frontEndStack.map((tech, idx) => {
      let tooltip = (
        <Tooltip id="tooltip" className="tooltip" key={idx}>
          <strong>{this.props.frontEndStackNames[idx]}</strong>
        </Tooltip>
      );
      return (
        <OverlayTrigger placement="top" overlay={tooltip}>
          <i className={`devicon-${tech} colored devicon`} key={idx} />
        </OverlayTrigger>
      );
    });
    let backendTechStack = this.props.backEndStack.map((tech, idx) => {
      let tooltip = (
        <Tooltip id="tooltip" className="tooltip" key={idx}>
          <strong>{this.props.backEndStackNames[idx]}</strong>
        </Tooltip>
      );
      if (tech === "firebase") {
        let firebaseTooltip = (
          <Tooltip id="tooltip" className="tooltip" key={idx}>
            <strong>Firebase</strong>
          </Tooltip>
        );
        return (
          <OverlayTrigger placement="top" overlay={firebaseTooltip}>
            <img
              src="../images/firebase-logo-built_black.svg"
              alt="not found"
              className="devicon-firebase devicon"
              key={idx}
            />
          </OverlayTrigger>
        );
      } else {
        return (
          <OverlayTrigger placement="top" overlay={tooltip} key={idx}>
            <i className={`devicon-${tech} colored devicon`} key={idx} />
          </OverlayTrigger>
        );
      }
    });
    let toolingTechStack = this.props.tools.map((tech, idx) => {
      let tooltip = (
        <Tooltip id="tooltip" className="tooltip" key={idx}>
          <strong>{this.props.toolsNames[idx]}</strong>
        </Tooltip>
      );
      return (
        <OverlayTrigger placement="top" overlay={tooltip} key={idx}>
          <i className={`devicon-${tech} colored devicon`} key={idx} />
        </OverlayTrigger>
      );
    });
    return (
      <Fade>
        <div className="project">
          <div className="project-image-container">
            <a href={this.props.github}>
              <i
                className={`devicon-github-plain-wordmark colored project-github-icon`}
              />
            </a>
            <a href={this.props.url}>
              <img
                className="project-image"
                src={this.props.imageSource}
                alt="Did not load"
              />
            </a>
          </div>

          <h2 className="project-title"> {this.props.name} </h2>
          <h3 className="project-description">{this.props.description}</h3>
          <div className="project-tech-stack-container">
            <div className="project-stack-container">
              <div className="project-stack-type">FRONTEND</div>
              {frontendTechStack}
            </div>
            <div className="project-stack-container">
              <div className="project-stack-type">BACKEND</div>
              {backendTechStack}
            </div>
            <div className="project-stack-container">
              <div className="project-stack-type">TOOLS</div>
              {toolingTechStack}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Project;
