import React, { Component } from "react";
import DogDisplay from "./dogDisplay";

class DogCanvas extends Component{

    constructor(){
        super();
        this.state = {
            displays: []
        };
    }
    
    fresh(){
        window.location.reload(true)
    }

    render(){
        return(
            <div>
                <DogDisplay />
                <DogDisplay />
                <DogDisplay />
                <DogDisplay />
                <DogDisplay />
                <DogDisplay />
                <DogDisplay />
                <DogDisplay />
                <button onClick={this.fresh}>Click to get new set of dogs</button>
            </div>
        )
    }
}

export default DogCanvas;