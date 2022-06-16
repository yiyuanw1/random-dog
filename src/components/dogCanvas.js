import React, { Component } from "react";
import DogDisplay from "./dogDisplay";
import "./dogCanvas.css";

class DogCanvas extends Component {
  constructor() {
    super();
    this.state = {
      displays: [],
    };
  }

  fresh() {
    window.location.reload(true);
  }

  render() {
    return (
      <div className="canvas">
        <div className="displays">
          <DogDisplay />
          <DogDisplay />
          <DogDisplay />
          <DogDisplay />
          <DogDisplay />
          <DogDisplay />
          <DogDisplay />
          <DogDisplay />
        </div>
        <button onClick={this.fresh}>Click to get new set of dogs</button>
      </div>
    );
  }
}

export default DogCanvas;
