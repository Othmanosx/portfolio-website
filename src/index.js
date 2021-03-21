// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

// Create Import File
import "./index.css";

import DarkPortfolioLanding from "./dark/PortfolioLanding";
import * as serviceWorker from "./serviceWorker";
import ReactGA from 'react-ga';
ReactGA.initialize('G-F270B7YPPX');

ReactGA.pageview(window.location.pathname + window.location.search);


class Root extends Component {
  render() {
    return <DarkPortfolioLanding />;
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
