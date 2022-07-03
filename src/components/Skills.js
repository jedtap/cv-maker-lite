import React, { Component } from "react";
import '../styles/Skills.css';

class Skills extends Component {

  skillsNewEntry = (props) => {
    // Goal is to generate this DOM:
    // <span>
    //   <input className="form-control-plaintext" type="text" placeholder="Your Skill Here"/>
    //   <div className="skills-delete"> x </div>
    // </span>

    const skillsSection = document.querySelector(".skills-group");
    let timeStamp = props.timeStamp
    let skillsSpan, skillsInput, skillsDelete;
    skillsSpan = document.createElement("span");
    skillsSpan.setAttribute("data-id",timeStamp);

    skillsInput = document.createElement("input");
    skillsInput.setAttribute("class","form-control-plaintext");
    skillsInput.setAttribute("type","text");
    skillsInput.setAttribute("placeholder","Your Skill Here");

    skillsDelete = document.createElement("div");
    skillsDelete.appendChild(document.createTextNode(" x "));
    skillsDelete.setAttribute("class","skills-delete");
    skillsDelete.setAttribute("data-id",timeStamp);
    skillsDelete.setAttribute("onclick", `{
      const item = document.querySelector("[data-id='${timeStamp}']");
      item.style.display = 'none';
    }`);


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
