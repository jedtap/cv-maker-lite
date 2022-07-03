import React, { Component } from "react";
import '../styles/General.css';

class General extends Component {

  render() {
    return (
      <div className="general">
        <div className="general-left">
          <input className="form-control-plaintext fullname" type="text" placeholder="Full Name" />
          <input className="form-control-plaintext occupation" type="text" placeholder="Occupation" />
        </div>
        <div className="general-right">
          <input className="form-control-plaintext location" type="text" placeholder="City, Country" />
          <input className="form-control-plaintext number" type="text" placeholder="Cell phone number" />
          <input className="form-control-plaintext email" type="text" placeholder="E-mail address" />
        </div>
      </div>
    );
  }
}

export default General;
