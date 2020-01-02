import React, { Component } from "react";

class FormTextareaExp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  handleSubmitForm = e => {
    alert("Textarea Content: " + this.state.content);
    e.preventDefault();
  };

  handleChange = e => {
    var value = e.target.value;
    this.setState({
      content: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>Content</label>
        <br />
        <textarea
          cols="45"
          rows="5"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
        <p>{this.state.content}</p>
      </form>
    );
  }
}

export default FormTextareaExp1;
