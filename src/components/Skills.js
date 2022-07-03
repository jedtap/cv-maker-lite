import React, { Component } from "react";
import '../styles/Skills.css';

class Skills extends Component {

  skillsNewEntry = () => {
    // Goal is to generate this DOM:
    // <span>
    //   <input className="form-control-plaintext" type="text" placeholder="Your Skill Here"/>
    //   <div className="skills-delete"> x </div>
    // </span>

    const skillsSection = document.querySelector(".skills-group");
    let skillsSpan, skillsInput, skillsDelete;
    skillsSpan = document.createElement("span");

    skillsInput = document.createElement("input");
    skillsInput.setAttribute("class","form-control-plaintext");
    skillsInput.setAttribute("type","text");
    skillsInput.setAttribute("placeholder","Your Skill Here");

    skillsDelete = document.createElement("div");
    skillsDelete.appendChild(document.createTextNode(" x "));
    skillsDelete.setAttribute("class","skills-delete");

    skillsSpan.appendChild(skillsInput);
    skillsSpan.appendChild(skillsDelete);
    skillsSection.appendChild(skillsSpan);
  };


  render() {
    return (
      <div className="skills">
        <div className="skills-header">
          <h2>Relevant Skills</h2>
          <div onClick={this.skillsNewEntry}  className="skills-add">+</div>
        </div>
        <div className="skills-group"></div> 
      </div>
    );
  }
}

export default Skills;
