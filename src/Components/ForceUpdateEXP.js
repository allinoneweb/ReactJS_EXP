import React, { Component } from "react";

class ForceUpdateEXP extends Component {
  forceUpdateState = () => {
    this.forceUpdate(); // If Comment this Random number will not update when you click button.
  };
  render() {
    return (
      <div>
        forceUpdateEXP
        <p>
          <button onClick={this.forceUpdateState}>ForceUpdate</button>
        </p>
        <h3>Random number: {Math.random()}</h3>
      </div>
    );
  }
}
export default ForceUpdateEXP;
