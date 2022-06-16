import React, { Component } from "react";
import axios from "axios";
import "./dogDisplay.css"

class DogDisplay extends Component{

    constructor(){
        super();
        this.state = {
            url: "",
            fileSizeBytes: 0
        }
    }

    getDog = async () => {
        await axios.get("https://random.dog/woof.json").then(
            response => {
                this.setState({
                    url: response.data.url,
                    fileSizeBytes: response.data.fileSizeBytes
                })
            }
        )
    }

    componentDidMount() {
        this.getDog();
      }
    
    render(){
        return(
            <div className="dogDisplay">
                <img src={this.state.url} alt=""/>
            </div>
        )
    }
}

export default DogDisplay;