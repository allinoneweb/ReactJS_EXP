import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginEXP from "./LoginEXP";
import FindDOMNode from "./FindDOMNode";
import PopsDefaultInFunEXP1 from "./PopsDefaultInFunEXP1";
class RouterEXP1 extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">LoginEXP</Link>
              </li>
              <li>
                <Link to="/FindDOMNode">FindDOMNode</Link>
              </li>
              <li>
                <Link to="/PopsDefaultInFunEXP1">PopsDefaultInFunEXP1</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={LoginEXP} />
            <Route path="/FindDOMNode" component={FindDOMNode} />
            <Route
              path="/PopsDefaultInFunEXP1"
              component={PopsDefaultInFunEXP1}
            />
          </div>
        </Router>
        ;
      </div>
    );
  }
}
export default RouterEXP1;
