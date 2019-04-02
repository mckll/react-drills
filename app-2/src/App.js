import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      array: ['bananas', 'apples','oranges','grapes']
    }
  }

  render() {
    let newArray = this.state.array.map((str) => { return (
      <div> {str} </div>
    ) } )
    return (
      <div className="App">
        <div className="array">
          { newArray }
          
        </div>
      </div>
    );
  }
}

export default App;
