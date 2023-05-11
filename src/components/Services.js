import React, { Component } from "react";
import { servicesTitle, servicesList } from "./data.js";

class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="services-component">
        <h2 className="services-title">{servicesTitle}</h2>
        {servicesList.map((item) => {
          return (
            <div className="service-item-background">
              <div className="service-item-container">
                <h4 className="service-item-title">{item.title}</h4>
                <div className="service-item-picture-container">
                  {/* <img src={} className="service-item-picture" /> */}
                </div>
                <p className="service-item-description">{item.description}</p>
                <p className="service-item-price">Preço: {item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Services;