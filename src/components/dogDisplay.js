import React, { Component } from "react";
import axios from "axios";

class DogDisplay extends Component{

    constructor(){
        super();
        this.state = {
            url: "",
            fileSizeBytes: 0
        }
    }

    getDog = () => {
        axios.get("https://random.dog/woof.json").then(
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
            <div>
                <img src={this.state.url} alt=""/>
            </div>
        )
    }
}

export default DogDisplay;