import React, { Component } from "react";
import { headerTitle } from "./data.js";


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-component">
        <h1 className="header-title">{headerTitle}</h1>
        <h3 className="sub-header">Explicações | Preparação para Exames | Revisão Textual | Traduções</h3>
      </div>
    );
  }
}

export default Header; 