import React, { Component } from "react";

class PopsExp1 extends Component {
  render() {
    return (
      <div>
        Pops Exp1
        <p>{this.props.Name}</p>
        <p>{this.props.Id}</p>
      </div>
    );
  }
}

export default PopsExp1;
