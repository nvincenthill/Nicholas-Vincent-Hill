import React from "react";
import WorkSample from "./WorkSample";
import Header from "./Header";
import NavCard from "./NavCard";

class Projects extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const workSampleData = [
      {
        title: "Corporate Strategy & Development - Customer Experience",
        description:
          "Excerpts from an objective assessment of a $10B National Healthcare Provider’s Western Division outpatient care scheduling function and recommendations for a future, consolidated contact center location.",
        image: "Corporate Strategy & Development.PNG",
        pdf: "Western Division CEC Consolidation 6.14.18 cleansed short.pdf"
      },
      {
        title: "Corporate Strategy & Development - Incentive Compensation",
        description:
          "Excerpts from an incentive compensation plan developed for the client’s ~1,000 contact center agents by identifying key performance metrics that would drive desired behaviors and produce the right customer experience.",
        image: "Corporate Strategy & Development2.PNG",
        pdf: "CEC Incentive Compensation Plan 6.14.18 cleansed short.pdf"
      },
      {
        title: "Corporate Transformation",
        description:
          "Includes the strategy and transition plans to assist a $60B national healthcare provider and insurer with an IT transformation from an infrastructure delivery to an outsourced “as-a-service” business model.",
        image: "Corporate Transformation.PNG",
        pdf: "Deliverable 2a_Transformation Plan_2018.02.05_v50 cleansed.pdf"
      },
      {
        title: "Organizational Leadership",
        description:
          "Drafted for a client working session to support a transition to a future-state organizational structure that leveraged cross-functional capabilities and streamlined the IT service delivery approach for a national healthcare provider and insurer.",
        image: "Organizational Leadership.PNG",
        pdf: "Deliverable 1a_Move Option Analysis v7 cleansed.pdf"
      }
    ];
    let workSamples = workSampleData.map((sample, index) => {
      return (
        <WorkSample
          key={index}
          title={sample.title}
          description={sample.description}
          image={sample.image}
          pdf={sample.pdf}
        />
      );
    });
    return (
      <React.Fragment>
        <Header title="Work Samples" icon="ios-folder" />
        <NavCard handleRoute={this.handleRoute} />
        <div className="project-array-container">{workSamples}</div>
      </React.Fragment>
    );
  }
}

export default Projects;
