import React, { Component } from "react";
import '../styles/Skills.css';

class Skills extends Component {

  render() {
    return (
      <div className="skills">
        <span>
          <h2>Relevant Skills <span>+</span></h2>
        </span>

        <div className="skills-group">
          <span>
            <input className="form-control-plaintext" type="text" placeholder="Your Skill Here" value="JavaScript" />
            <span> x </span>
          </span>
          <span>
            <input className="form-control-plaintext" type="text" placeholder="Your Skill Here" value="React JS" />
            <span> x </span>
          </span>
          <span>
            <input className="form-control-plaintext" type="text" placeholder="Your Skill Here" value="Project Management" />
            <span> x </span>
          </span>
          <span>
            <input className="form-control-plaintext" type="text" placeholder="Your Skill Here" value="Portfolio Management" />
            <span> x </span>
          </span>
        </div> 
      </div>
    );
  }
}

export default Skills;
