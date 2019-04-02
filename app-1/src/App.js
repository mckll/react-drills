import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message:""
    };
  }

  handleChange(value) {
    this.setState({ message: value });
  }

  render() {
    return (
      <div className="App">
        <div>
          <input onChange={e => this.handleChange(e.target.value)} type="text" />
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default App;
