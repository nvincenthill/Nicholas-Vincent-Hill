import React from "react";
import Header from "./Header";
import NavCard from "./NavCard";
import Project from "./Project";

class Projects extends React.Component {
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
        <Header title="Projects" icon="ios-folder" />
        <NavCard handleRoute={this.handleRoute} />
        <Project
          name="The Meal Panda"
          imageSource="../images/mealpanda_showcase.png"
          description="Menu planner & grocery list generator"
          builtWith=""
          url="https://mealpanda.herokuapp.com/"
          github="https://github.com/nvincenthill/mealpanda"
          iconAnimation="tada"
          frontEndStack={[
            "html5-plain",
            "bootstrap-plain",
            "css3-plain",
            "javascript-plain",
            "react-original"
          ]}
          backEndStack={["nodejs-plain", "firebase"]}
          tools={[
            "photoshop-plain",
            "trello-plain",
            "heroku-plain",
            "webpack-plain",
            "git-plain"
          ]}
        />
      </React.Fragment>
    );
  }
}

export default Projects;
