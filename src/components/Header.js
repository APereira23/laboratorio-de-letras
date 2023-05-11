import React, { Component } from "react";
import { headerTitle } from "./data.js";
import microscope from "../pictures/microscope.png";
import flask from "../pictures/erlenmeyer-flask-296801_640.png";


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-component">
        <img className="header-image-flask" src={flask} />
        <h1 className="header-title">{headerTitle}</h1>
        <img className="header-image-microscope" src={microscope} />
      </div>
    );
  }
}

export default Header; 