import React, { Component } from "react";
import '../styles/Work.css';

class Work extends Component {

  render() {
    return (
      <div className="work">
        <h2>Work Experience</h2>
        
        <div className="work-group">
          <div className="work-left">
            <h3>Coca-Cola Beverages Philippines Inc</h3>
            <h4>Davao City Philippines</h4>
            <h4>2000 - 1999</h4>
          </div>
          <div className="work-right">
            <h3>Account managing officer of the East Coast</h3>
            <h4>Descriptions go here</h4>
          </div>
        </div>

        <div className="work-group">
          <div className="work-left">
            <h3>Coca-Cola Beverages Philippines Inc</h3>
            <h4>Davao City Philippines</h4>
            <h4>2000 - 1999</h4>
          </div>
          <div className="work-right">
            <h3>Account managing officer of the East Coast</h3>
            <h4>Descriptions go here</h4>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Work;
