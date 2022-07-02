import React, { Component } from "react";
import '../styles/Education.css';

class Education extends Component {

  render() {
    return (
      <div className="education">
        <h2>Education</h2>

        <div className="education-group">
          <div className="education-left">
            <h3>De La Salle University Manila</h3>
            <h4>1888 - 1920</h4>
          </div>

          <div className="education-right">
            <h3>Bachelor of Science in Mechanical Engr.</h3>
            <h4>Relevant honors, projects done</h4>
          </div>
        </div>

        <div className="education-group">
          <div className="education-left">
            <h3>De La Salle University Manila</h3>
            <h4>1888 - 1920</h4>
          </div>

          <div className="education-right">
            <h3>Bachelor of Science in Mechanical Engr.</h3>
            <h4>Relevant honors, projects done</h4>
          </div>
        </div>

      </div>
    );
  }
}

export default Education;
