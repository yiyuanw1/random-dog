import React, { Component } from "react";
import axios from "axios";
import "./dogDisplay.css";

const VideoTypes = ["mp4", "avi", "webm", "mov"];
const PictureTypes = ["jpg", "gif", "png", "jpeg"];
class DogDisplay extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      fileSizeBytes: 0,
      type: "",
    };
    this.getDog();
  }

  getDog = async () => {
    await axios.get("https://random.dog/woof.json").then((response) => {
      var type = response.data.url.split(".").pop();
      if (!PictureTypes.concat(VideoTypes).includes(type.toLowerCase())) {
        this.getDog();
      }
      this.setState({
        url: response.data.url,
        fileSizeBytes: response.data.fileSizeBytes,
        type: type,
      });
    });
  };

  render() {
    if (VideoTypes.includes(this.state.type)) {
      return (
        <div className="dogDisplay">
          <video src={this.state.url} autoPlay loop />
        </div>
      );
    } else {
      return (
        <div className="dogDisplay">
          <img src={this.state.url} alt="" />
        </div>
      );
    }
  }
}

export default DogDisplay;
