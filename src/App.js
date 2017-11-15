import React, { Component } from "react";
import "./App.css";
import Step from "./Step";
import PersonalForm from "./PersonalForm";
import CardForm from "./CardForm";

const stepTitles = ["Personal information", "Card information", "Finish"];

class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    isTimeOver: false
  };

  handleClickNextForm = () => {
    const { ...state } = this.state;
    this.setState({ step: state.step + 1 });
  };

  handleChangeForm = (stateKey, stateValue) => {
    this.setState({ [stateKey]: stateValue }); //?
  };

  handleTabClick = step => {
    this.setState({ step: step });
  };

  handleChangeTimeOver = isTimeOver => {
    this.setState({ isTimeOver });
  };

  isFormCommitable = () => {
    const { ...state } = this.state;
    switch (state.step) {
      case 1:
        return (
          state.firstName !== "" &&
          state.lastName !== "" &&
          state.email !== "" &&
          state.email.includes("@")
        );
      case 2:
        const correctLengthCardNumber = 16;
        return state.cardNumber.length === correctLengthCardNumber;
      default:
        return false;
    }
  };

  renderForm() {
    const { ...state } = this.state;
    let form;
    switch (state.step) {
      case 1:
        return (
          <PersonalForm
            firstName={state.firstName}
            lastName={state.lastName}
            email={state.email}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={state.cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
      case 3:
        return "Поздравляем!";
      default:
        return "";
    }
    return form;
  }

  render() {
    const { ...state } = this.state;
    const isDisabledNextButton = !this.isFormCommitable() || state.isTimeOver;

    return (
      <div className="container">
        <div className="tab-panel">
          {stepTitles.map((item, index) => (
            <Step
              key={item}
              onClick={this.handleChangeForm}
              isSelected={state.step === index + 1}
              number={index + 1}
              isClickable={false}
            >
              {item}
            </Step>
          ))}
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={isDisabledNextButton ? "disabled" : null}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
