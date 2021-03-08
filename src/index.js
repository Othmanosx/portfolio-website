// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

import DarkPortfolioLanding from "./dark/PortfolioLanding";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return <DarkPortfolioLanding />;
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
