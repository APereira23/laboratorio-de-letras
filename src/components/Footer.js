import React, { Component } from "react";
import { contacts } from "./data.js";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-component">
        <h2>{contacts.message}</h2>
        <p><strong>Email:</strong> {contacts.email}</p>
        <p><strong>Telemóvel:</strong> {contacts.phone}</p>
      </div>
    );
  }
}

export default Footer;