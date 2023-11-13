import React from "react"
import ReactDom from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./components/App"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
  <Router>
    <Route component={App} />
  </Router>,
  document.getElementById('root')
);