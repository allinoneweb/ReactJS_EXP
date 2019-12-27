import React, { Component } from "react";

class WithOutArrowFunctions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "Adi"
    };
    this.changeName = this.changeName.bind(this);
  }
  changeName() {
    this.setState({ Name: "Adi JC" });
  }
  render() {
    return (
      <div>
        Arrow Functions
        <p>{this.state.Name}</p>
        <button onClick={this.changeName}>Click me</button>
      </div>
    );
  }
}
export default WithOutArrowFunctions;
