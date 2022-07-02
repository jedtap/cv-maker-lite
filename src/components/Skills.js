import React, { Component } from "react";
import '../styles/Skills.css';

class Skills extends Component {

  render() {
    return (
      <div className="skills">
        <h2>Relevant Skills</h2>
        <div className="skills-group">
          <input className="form-control-plaintext" type="text" placeholder="Your Skill Here" value="JavaScript" />
          <input className="form-control-plaintext" type="text" placeholder="Your Skill Here" value="React JS" />
          <input className="form-control-plaintext" type="text" placeholder="Your Skill Here" value="Project Management" />
          <input className="form-control-plaintext" type="text" placeholder="Your Skill Here" value="Portfolio Management" />
        </div> 
      </div>
    );
  }
}

export default Skills;
