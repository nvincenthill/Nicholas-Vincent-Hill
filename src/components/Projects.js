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
          backEndStack={[
            "nodejs-plain",
            // "express-original-wordmark",
            "firebase"
          ]}
          tools={[
            "photoshop-plain",
            "trello-plain",
            "heroku-plain",
            "webpack-plain",
            "git-plain"
          ]}
        />
        <Project
          name="Nick's Bloomberg Terminal"
          imageSource="../images/shroomberg_showcase.png"
          description="A Yahoo finance/Bloomberg knockoff named 'Shroomberg'"
          url="https://shroomberg.herokuapp.com/"
          github="https://github.com/nvincenthill/stock-quote-app"
          iconAnimation="bounce"
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
        <Project
          name="Scrabblr"
          imageSource="../images/scrabblr_showcase.png"
          description="A tile-based word game for the whole family"
          builtWith="HTML5 | CSS | JS | p5.js"
          url="https://scrabblr.herokuapp.com/"
          github="https://github.com/nvincenthill/scrabblr"
          iconAnimation="rubberBand"
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
