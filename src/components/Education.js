import React, { Component } from "react";
import '../styles/Education.css';

class Education extends Component {

  render() {
    return (
      <div className="education">
        <div className="education-header">
          <h2>Education</h2>
          <div className="education-add">+</div>
        </div>

        <div className="education-group">
          <div className="education-left">
            <input className="form-control-plaintext education-subtitle" type="text" placeholder="University/College Name" value="De La Salle University" />
            <input className="form-control-plaintext education-caption" type="text" placeholder="YEAR - YEAR" value="1989 - 2010" />
          </div>
          <div className="education-right">
            <input className="form-control-plaintext education-subtitle" type="text" placeholder="Degree/Certificate Received" value="Bachelor of Science in Mechanical Engr" />
            <textarea className="form-control-plaintext" placeholder="Showcase your achievements here!" rows="2" value="Foresee over 44 projects and initiatives between Technology and Business" /> 
          </div>
          <div className="education-delete"> x </div>
        </div>

        <div className="education-group">
          <div className="education-left">
            <input className="form-control-plaintext education-subtitle" type="text" placeholder="University/College Name" value="De La Salle University" />
            <input className="form-control-plaintext education-caption" type="text" placeholder="YEAR - YEAR" value="1989 - 2010" />
          </div>
          <div className="education-right">
            <input className="form-control-plaintext education-subtitle" type="text" placeholder="Degree/Certificate Received" value="Bachelor of Science in Mechanical Engr" />
            <textarea className="form-control-plaintext" placeholder="Showcase your achievements here!" rows="2" value="Foresee over 44 projects and initiatives between Technology and Business" /> 
          </div>
          <div className="education-delete"> x </div>

        </div>

      </div>
    );
  }
}

export default Education;
