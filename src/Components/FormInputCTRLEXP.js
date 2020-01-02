import React, { Component } from "react";

class FormInputCTRLEXP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: ""
    };
  }

  handleSubmitForm = e => {
    alert("Full Name: " + this.state.fullName);
    e.preventDefault();
  };

  handleChange = e => {
    var value = e.target.value;
    this.setState({
      fullName: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          Full Name:
          <input
            type="text"
            value={this.state.fullName}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
        <p>{this.state.fullName}</p>
      </form>
    );
  }
}
export default FormInputCTRLEXP;
