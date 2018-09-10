import React from "react";

class Project extends React.Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    let techStack = this.props.stack.map(tech => {
      return <i class={`devicon-${tech} colored devicon`} />;
    });
    return (
      <div className="project">
        <a href={this.props.url}>
          <img
            className="project_image"
            src={this.props.imageSource}
            alt="Did not load"
          />
          <h2 className="project_title"> {this.props.name} </h2>
        </a>
        <h3 className="project_description">{this.props.description}</h3>
        {techStack}
      </div>
    );
  }
}

export default Project;
