import React, { Component } from "react";
class FormUncontrolledComponent extends Component {
  constructor(props) {
    super(props);

    this.Name = React.createRef();
    this.Email = React.createRef();
  }
  updateSubmit = event => {
    alert(
      "Name:" + this.Name.current.value + " & Email:" + this.Email.current.value
    );
    alert("You have entered the UserName and CompanyName successfully.");
    event.preventDefault(); // this line will rrevent post back of component
  };
  render() {
    return (
      <div>
        Form Uncontrolled Component Exp
        <form onSubmit={this.updateSubmit}>
          <table>
            <tr>
              <td>Name:</td>
              <td>
                <input id="Name" type="text" ref={this.Name} />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input id="Name" type="text" ref={this.Email} />
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
export default FormUncontrolledComponent;
