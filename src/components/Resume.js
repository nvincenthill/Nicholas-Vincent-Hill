import React from "react";
import Header from "./Header";
import NavCard from "./NavCard";

class Resume extends React.Component {
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
        <Header title="Resume" icon="ios-folder" />
        <NavCard handleRoute={this.handleRoute} />
        <p>Resume</p>
      </React.Fragment>
    );
  }
}

export default Resume;
