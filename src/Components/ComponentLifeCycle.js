import React, { Component } from "react";
class ComponentLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { hello: "Adi" };
    this.changeState = this.changeState.bind(this);
  }
  render() {
    return (
      <div>
        Component Life Cycle
        <h3>Hello {this.state.hello}</h3>
        <button onClick={this.changeState}>Click Here!</button>
      </div>
    );
  }
  UNSAFE_componentWillMount() {
    console.log("Component Will MOUNT!");
  }
  componentDidMount() {
    console.log("Component Did MOUNT!");
  }
  changeState() {
    this.setState({ hello: "All!!- Its a great reactjs ." });
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    console.log("Component Will Recieve Props!");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("Component Will UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component Will UNMOUNT!");
  }
}
export default ComponentLifeCycle;
