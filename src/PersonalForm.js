import React, { Component } from "react";
import Title from "./Title";
import "./PersonalForm.css";

export class PersonalForm extends Component {
  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };

  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <div>
        <Title>Персональная информация</Title>
        <div className="personal-form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={this.handleChangeForm}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={this.handleChangeForm}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChangeForm}
          />
        </div>
      </div>
    );
  }
}

export default PersonalForm;
