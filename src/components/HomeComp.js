import React, { Component } from "react";
import Services from "./Services";
import { slogan, welcomeText } from "./data.js";

class HomeComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-component">
        <div className="home-flex-container">
          <div className="landing-container">
            <h2 className="landing-slogan">{slogan}</h2>
            <p className="landing-welcome-text">{welcomeText}</p>
            <Services />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComp;