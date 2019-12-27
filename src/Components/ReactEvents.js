import React, { Component } from "react";
class ReactEvents extends Component {
  constructor() {
    super();
    this.state = {
      Name: ""
    };
  }
  changeText = event => {
    this.setState({
      Name: event.target.value
    });
  };
  render() {
    return (
      <div>
        React Events Exp Name:
        <input type="text" id="Name" onChange={this.changeText} />
        <div>{this.state.Name}</div>
      </div>
    );
  }
}
export default ReactEvents;
