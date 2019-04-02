import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://images-production.freetls.fastly.net/uploads/posts/off_site_promo_image/168141/sad-cat-eyes.jpg?auto=compress&crop=top&fit=crop&q=55&w=1200&h=900"} />
      </div>
    );
  }
}

export default App;
