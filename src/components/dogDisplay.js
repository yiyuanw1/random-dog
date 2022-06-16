import React, { Component } from "react";
import "./dogDisplay.css";

const VideoTypes = ["mp4", "avi", "webm", "mov"];
class DogDisplay extends Component {
  constructor(props) {
    super();
    this.state = {
      url: props.url,
      alt: props.alt,
      type: props.type,
    };
  }

  render() {
    if (VideoTypes.includes(this.state.type)) {
      return (
        <div className="dogDisplay" data-testid="video-display">
          <video src={this.state.url} autoPlay loop />
        </div>
      );
    } else {
      return (
        <div className="dogDisplay" data-testid="image-display">
          <img src={this.state.url} alt={this.state.alt} />
        </div>
      );
    }
  }
}

export default DogDisplay;
