import React, { Component } from "react";
// import Overview from "./components/Overview";


class App extends Component {
  constructor() {
    super();
    this.state = {
      task: { text: '', id: uniqid() }, //uniquid
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task : { text: e.target.value, id: this.state.task.id, } //uniquid
    });
  };


  render() {

    return (

    );

  }
}

export default App;
