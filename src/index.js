// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

// Create Import File
import "./index.css";

import DarkPortfolioLanding from "./dark/PortfolioLanding";
import * as serviceWorker from "./serviceWorker";


class Root extends Component {
  render() {
    return <DarkPortfolioLanding />;
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
