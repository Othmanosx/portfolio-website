// React Required
import React, { Component } from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"

// Create Import File
import "./index.css"

import LandingPage from "./LandingPage"
import * as serviceWorker from "./serviceWorker"

class Root extends Component {
  render() {
    return <LandingPage />
  }
}

ReactDOM.render(<Root />, document.getElementById("root"))
serviceWorker.register()
