import React, { Component } from "react";
import './styles/App.css';
import General from "./components/General";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";

class App extends Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   task: { text: '', id: uniqid() }, //uniquid
  //   //   tasks: [],
  //   // };
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     task : { text: e.target.value, id: this.state.task.id, } //uniquid
  //   });
  // };


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
