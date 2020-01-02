import React, { Component } from "react";

class FormSelectExp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteFlavor: "coconut"
    };
  }

  handleSubmitForm = e => {
    alert("Favorite Flavor: " + this.state.favoriteFlavor);
    e.preventDefault();
  };

  handleChange = e => {
    var value = e.target.value;
    this.setState({
      favoriteFlavor: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <p>Pick your favorite flavor:</p>
        <select value={this.state.favoriteFlavor} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default FormSelectExp1;
