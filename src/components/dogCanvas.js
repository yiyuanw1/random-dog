import React, { Component } from "react";
import DogDisplay from "./dogDisplay";
import "./dogCanvas.css";
import axios from "axios";

const VideoTypes = ["mp4", "avi", "webm", "mov"];
const ImgTypes = ["jpg", "gif", "png", "jpeg"];
export default class DogCanvas extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      fetched: false
    };

    this.refresh = this.refresh.bind(this);
  }

  async getDogs() {
    var list = [];
    for (var i = 0; i < 8; i++) {
      const response = await axios.get("https://random.dog/woof.json");
      const value = response.data;
      var type = value.url.split(".").pop().toLowerCase();
      if (!ImgTypes.concat(VideoTypes).includes(type.toLowerCase())) {
        i--;
        continue;
      }
      list.push({
        url: value.url,
        fileSize: value.fileSizeBytes,
        type: type,
      });
    }
    return list;
  }

  updateDogs(){
    if (!this.state.fetched) {
      this.getDogs().then((result) => {
        this.setState((_) => ({
          dogs: result,
          fetched: true,
        }));
      });
    }
  }

  componentDidUpdate() {
    this.updateDogs();
  }

  componentDidMount(){
    this.updateDogs();
  }

  refresh() {
    this.setState((state)=> ({
      ...state,
      fetched: false
    }));
  }

  render() {
    return (
      <div className="canvas">
        <button onClick={this.refresh} data-testid="refresh-btn">Click to get new set of dogs</button>
        <div className="displays" data-testid="display-area">
          {this.state.dogs.map((dog, i) => {
            return <DogDisplay url={dog.url} alt="" type={dog.type} key={dog.url+i}/>;
          })}
        </div>
      </div>
    );
  }
}
