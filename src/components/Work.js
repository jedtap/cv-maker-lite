import React, { Component } from "react";
import '../styles/Work.css';

class Work extends Component {

  render() {
    return (
      <div className="work">
        <span>
          <h2>Work Experience <span>+</span></h2>
        </span>
        
        <div className="work-group">
          <div className="work-left">
            <input className="form-control-plaintext work-subtitle" type="text" placeholder="Company Name" value="Coca-Cola Beverages Philippines Inc" />
            <input className="form-control-plaintext work-caption" type="text" placeholder="Company City, Country" value="Davao City Philippines" />
            <input className="form-control-plaintext work-caption" type="text" placeholder="YEAR - YEAR" value="2000 - 1999" />
          </div>
          <div className="work-right">
            <input className="form-control-plaintext work-subtitle" type="text" placeholder="Job Title" value="Account managing officer" />
            <textarea className="form-control-plaintext" placeholder="Describe your main highlight/achievement!" rows="3" value="Describe the main highlight/achievement!" /> 
          </div>
          <div className="work-delete">
            X
          </div>
        </div>

        <div className="work-group">
          <div className="work-left">
            <input className="form-control-plaintext work-subtitle" type="text" placeholder="Company Name" value="Coca-Cola Beverages Philippines Inc" />
            <input className="form-control-plaintext work-caption" type="text" placeholder="Company City, Country" value="Davao City Philippines" />
            <input className="form-control-plaintext work-caption" type="text" placeholder="YEAR - YEAR" value="2000 - 1999" />
          </div>
          <div className="work-right">
            <input className="form-control-plaintext work-subtitle" type="text" placeholder="Job Title" value="Account managing officer" />
            <textarea className="form-control-plaintext" placeholder="Describe your main highlight/achievement!" rows="3" value="Describe the main highlight/achievement!" /> 
          </div>
          <div className="work-delete">
            X
          </div>
        </div>
        
      </div>
    );
  }
}

export default Work;
