import React, { Component } from "react";
import '../styles/Skills.css';

class Skills extends Component {

  render() {
    return (
      <div className="skills">
        <div className="skills-header">
          <h2>Relevant Skills</h2>
          <div className="skills-add">+</div>
        </div>

        <div className="skills-group">
          <span>
            <input className="form-control-plaintext" type="text" placeholder="Your Skill Here" value="JavaScript" />
            <div className="skills-delete"> x </div>
          </span>
          <span>
            <input className="form-control-plaintext" type="text" placeholder="Your Skill Here" value="React JS" />
            <div className="skills-delete"> x </div>
          </span>
          <span>
            <input className="form-control-plaintext" type="text" placeholder="Your Skill Here" value="Project Management" />
            <div className="skills-delete"> x </div>
          </span>
          <span>
            <input className="form-control-plaintext" type="text" placeholder="Your Skill Here" value="Portfolio Management" />
            <div className="skills-delete"> x </div>
          </span>
        </div> 
      </div>
    );
  }
}

export default Skills;
