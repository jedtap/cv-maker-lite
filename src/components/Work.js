import React, { Component } from "react";
import '../styles/Work.css';

class Work extends Component {

  workNewEntry = () => {
    // Goal is to display the template:
    // <div className="work-group">
    //   <div className="work-left">
    //     <input className="form-control-plaintext work-subtitle" type="text" placeholder="Company Name" />
    //     <input className="form-control-plaintext work-caption" type="text" placeholder="Company City, Country" />
    //     <input className="form-control-plaintext work-caption" type="text" placeholder="YEAR - YEAR"  />
    //   </div>
    //   <div className="work-right">
    //     <input className="form-control-plaintext work-subtitle" type="text" placeholder="Job Title" />
    //     <textarea className="form-control-plaintext" placeholder="Describe your main highlight/achievement!" rows="3" /> 
    //   </div>
    //   <div className="work-delete"> x </div>
    // </div>

    const workSection = document.querySelector(".work");
    let workGroup, workLeft, workCompanyName, workCompanyLocation, workCompanyYear;
    let workRight, workJob, workAchievement, workDelete;

    workGroup = document.createElement("div");
    workGroup.setAttribute("class","work-group");

    workLeft = document.createElement("div");
    workLeft.setAttribute("class","work-left");

    workCompanyName = document.createElement("input");
    workCompanyName.setAttribute("class","form-control-plaintext work-subtitle");
    workCompanyName.setAttribute("type","text");
    workCompanyName.setAttribute("placeholder","Company Name");

    workCompanyLocation = document.createElement("input");
    workCompanyLocation.setAttribute("class","form-control-plaintext work-caption");
    workCompanyLocation.setAttribute("type","text");
    workCompanyLocation.setAttribute("placeholder","Company City, Country");

    workCompanyYear = document.createElement("input");
    workCompanyYear.setAttribute("class","form-control-plaintext work-caption");
    workCompanyYear.setAttribute("type","text");
    workCompanyYear.setAttribute("placeholder","YEAR - YEAR");

    workRight = document.createElement("div");
    workRight.setAttribute("class","work-right");

    workJob = document.createElement("input");
    workJob.setAttribute("class","form-control-plaintext work-subtitle");
    workJob.setAttribute("type","text");
    workJob.setAttribute("placeholder","Job Title");

    workAchievement = document.createElement("textarea");
    workAchievement.setAttribute("class","form-control-plaintext");
    workAchievement.setAttribute("rows","3");
    workAchievement.setAttribute("placeholder","Describe your main highlight/achievement!");

    workDelete = document.createElement("div");
    workDelete.appendChild(document.createTextNode(" x "));
    workDelete.setAttribute("class","work-delete");


    workRight.appendChild(workJob);
    workRight.appendChild(workAchievement);
    workLeft.appendChild(workCompanyName);
    workLeft.appendChild(workCompanyLocation);
    workLeft.appendChild(workCompanyYear);
    workGroup.appendChild(workLeft);
    workGroup.appendChild(workRight);
    workGroup.appendChild(workDelete);
    workSection.appendChild(workGroup);
  };
  


  render() {
    return (
      <div className="work">
        <div className="work-header">
          <h2>Work Experience</h2>
          <div onClick={this.workNewEntry} className="work-add">+</div>
        </div>
      </div>
    );
  }
}

export default Work;
