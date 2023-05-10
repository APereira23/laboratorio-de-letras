import React, { Component } from "react";
import HomeComp from "./HomeComp";

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activePage } = this.props;
    // switch (activePage) {
    //   case "home":
        return <HomeComp />;
    //   case "prices":
    //     return <PricesComp />;
    //   case "blog":
    //     return <BlogComp />;
    // }
  }
}

export default Display;