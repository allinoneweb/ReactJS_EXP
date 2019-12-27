import React, { Component } from "react";

class StateFromParentToChild extends Component {
  constructor() {
    super();
    this.state = {
      name: "Adi"
    };
  }
  render() {
    return (
      <div>
        State From Parent To Child Class & Child Funtion
        <div>Parent Class</div>
        <JTP name={this.state.name} />
        <PopsInFunEXP1 name={this.state.name} />
      </div>
    );
  }
}
class JTP extends Component {
  render() {
    return (
      <div>
        <div>Child Class</div>
        <div>Welcome to {this.props.name}</div>
      </div>
    );
  }
}
function PopsInFunEXP1(props) {
  return (
    <div>
      <div>Child Funtion</div>
      <div>{props.name}</div>
    </div>
  );
}
export default StateFromParentToChild;
