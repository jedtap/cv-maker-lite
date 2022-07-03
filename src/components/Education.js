import React, { Component } from "react";
import '../styles/Education.css';

class Education extends Component {

  educationNewEntry = () =>{
    // Goal is to generate this DOM:
    // <div className="education-group">
    //   <div className="education-left">
    //     <input className="form-control-plaintext education-subtitle" type="text" placeholder="University/College Name" />
    //     <input className="form-control-plaintext education-caption" type="text" placeholder="YEAR - YEAR"/>
    //   </div>
    //   <div className="education-right">
    //     <input className="form-control-plaintext education-subtitle" type="text" placeholder="Degree/Certificate Received" />
    //     <textarea className="form-control-plaintext" placeholder="Showcase your achievements here!" rows="2" /> 
    //   </div>
    //   <div className="education-delete"> x </div>
    // </div>

    const educationSection = document.querySelector(".education");
    let eduGroup, eduDelete;
    let eduLeft, eduUni, eduYear;
    let eduRight, eduDegree, eduAchievements;

    eduGroup = document.createElement("div");
    eduGroup.setAttribute("class","education-group");

    eduLeft = document.createElement("div");
    eduLeft.setAttribute("class","education-left");

    eduUni = document.createElement("input");
    eduUni.setAttribute("class","form-control-plaintext education-subtitle");
    eduUni.setAttribute("type","text");
    eduUni.setAttribute("placeholder","University/College Name");

    eduYear = document.createElement("input");
    eduYear.setAttribute("class","form-control-plaintext education-caption");
    eduYear.setAttribute("type","text");
    eduYear.setAttribute("placeholder","YEAR - YEAR");

    eduRight = document.createElement("div");
    eduRight.setAttribute("class","education-right");

    eduDegree = document.createElement("input");
    eduDegree.setAttribute("class","form-control-plaintext education-subtitle");
    eduDegree.setAttribute("type","text");
    eduDegree.setAttribute("placeholder","Degree/Certificate Received");

    eduAchievements = document.createElement("textarea");
    eduAchievements.setAttribute("class","form-control-plaintext");
    eduAchievements.setAttribute("rows","2");
    eduAchievements.setAttribute("placeholder","Showcase your achievements here!");

    eduDelete = document.createElement("div");
    eduDelete.appendChild(document.createTextNode(" x "));
    eduDelete.setAttribute("class","education-delete");


    eduLeft.appendChild(eduUni);
    eduLeft.appendChild(eduYear);
    eduRight.appendChild(eduDegree);
    eduRight.appendChild(eduAchievements);
    eduGroup.appendChild(eduLeft);
    eduGroup.appendChild(eduRight);
    eduGroup.appendChild(eduDelete);
    educationSection.appendChild(eduGroup);
  };


  render() {
    return (
      <div className="education">
        <div className="education-header">
          <h2>Education</h2>
          <div onClick={this.educationNewEntry} className="education-add">+</div>
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
