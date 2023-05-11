import React, { Component } from "react";
import aboutImage from "../pictures/picture.jpeg";
import { aboutTitle } from "./data";
import { aboutText } from "./data";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-component">
        <h2 className="about-title">{aboutTitle}</h2>
        <div className="about-main-container">
          <div className="about-image-container">
            <img className="about-image" src={aboutImage}></img>
          </div>
          <div className="about-text">
            {aboutText.map((p) => {
              return (
                <p>{p}</p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default About;