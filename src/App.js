import React, { Component } from "react";
import './styles/App.css';
import General from "./components/General";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";

class App extends Component {
  render() {
    return (
      <div className="main">
        <div />
        <General />
        <Work />
        <Education />
        <Skills />
        <div />
      </div>
    );
  }
}

export default App;
