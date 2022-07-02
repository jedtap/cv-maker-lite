import React, { Component } from "react";
import '../styles/General.css';

class General extends Component {

  render() {
    return (
      <div className="general">
        <div className="general-left">
          <h1>Boddy D. Dimmadome</h1>
          <h2>Full-stack developer</h2>
        </div>
        <div className="general-right">
          <h3>Davao City, Philippines</h3>
          <h3>0977 777 7777</h3>
          <h3>bobby@mishimacorp.com</h3>
        </div>
      </div>
    );
  }
}

export default General;
