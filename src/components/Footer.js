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
        <p className="footer-email"><strong>Email:</strong> {contacts.email}</p>
        <p><strong>Telemóvel:</strong> {contacts.phone}</p>
        <div className="social-media-container">
          <p>Segue-nos em:</p>
          <a target="_blank" title="Follow us on Facebook" 
            href="https://www.facebook.com/PLACEHOLDER">
            <img alt="follow us on Facebook" 
              src="https://marketing.create-cdn.net/assets/facebook40x40.png" />
          </a>
          <a target="_blank" title="Follow us on Instagram" 
            href="https://www.instagram.com/PLACEHOLDER">
            <img alt="follow us on instagram" 
              src="https://marketing.create-cdn.net/assets/instagram40x40.png" />
          </a>
        </div>

      </div>
    );
  }
}

export default Footer;