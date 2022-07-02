import React, { Component } from "react";
import '../styles/General.css';

class General extends Component {

  render() {
    return (
      <div className="general">
        <div className="general-left">
          <input className="form-control-plaintext fullname" type="text" placeholder="Full Name" value="Bobby D Licious" />
          <input className="form-control-plaintext occupation" type="text" placeholder="Occupation" value="Full Stack Developer" />
        </div>
        <div className="general-right">
          <input className="form-control-plaintext location" type="text" placeholder="City, Country" value="Davao City, Philippines"/>
          <input className="form-control-plaintext number" type="text" placeholder="Cell phone number" value="0977 777 7777" />
          <input className="form-control-plaintext email" type="text" placeholder="E-mail address" value="bobbyD@machima.com"/>
        </div>
      </div>
    );
  }
}

export default General;
