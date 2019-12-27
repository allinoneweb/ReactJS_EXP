import React, { Component } from "react";
import ReactDOM from "react-dom";

class FindDOMNode extends Component {
  ChangeDiv1Color = () => {
    var myDiv1 = document.getElementById("div1");
    ReactDOM.findDOMNode(myDiv1).style.color = "blue";
  };
  ChangeDiv2Color = () => {
    var myDiv2 = document.getElementById("div2");
    ReactDOM.findDOMNode(myDiv2).style.color = "red";
  };
  render() {
    return (
      <div>
        findDOMNode() EXP
        <div id="div1">It's div1</div>
        <div id="div2">It's div2</div>
        <p>
          <button onClick={this.ChangeDiv1Color}>Div1 Color</button>
        </p>
        <p>
          <button onClick={this.ChangeDiv2Color}>Div2 Color</button>
        </p>
      </div>
    );
  }
}
export default FindDOMNode;
