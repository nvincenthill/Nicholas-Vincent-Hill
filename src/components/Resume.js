import React from "react";
import { Document, Page } from "react-pdf";
import resume from "../assets/currentResume.pdf";
import Header from "./Header";
import NavCard from "./NavCard";

class Resume extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  render() {
    const downloadButton = (
      <div className="resume-download-button">
        <a
          href={require("../assets/currentResume.pdf")}
          download="currentResume.pdf"
        >
          Download my resume!
        </a>
      </div>
    );
    return (
      <React.Fragment>
        <Header title="Resume" icon="ios-folder" />
        <NavCard handleRoute={this.handleRoute} />
        <div className="resume-container">
          {downloadButton}
          <Document className="resume" file={resume}>
            <Page pageNumber={1} renderTextLayer={false} scale={0.75} />
          </Document>
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;
