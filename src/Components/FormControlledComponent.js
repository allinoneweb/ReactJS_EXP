import React, { Component } from "react";
class FormControlledComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: ""
    };
  }
  changeName = event => {
    this.setState({ Name: event.target.value });
  };
  changeEmail = event => {
    this.setState({ Email: event.target.value });
  };
  updateSubmit = event => {
    alert("Name:" + this.state.Name + " & Email:" + this.state.Email);
    alert("You have entered the UserName and CompanyName successfully.");
    event.preventDefault(); // this line will rrevent post back of component
  };
  render() {
    return (
      <div>
        Form Controlled Component EXP
        <form onSubmit={this.updateSubmit}>
          <table>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  id="Name"
                  type="text"
                  value={this.state.Name}
                  onChange={this.changeName}
                />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  id="Email"
                  type="text"
                  value={this.state.Email}
                  onChange={this.changeEmail}
                />
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <button>Submit</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}
export default FormControlledComponent;
