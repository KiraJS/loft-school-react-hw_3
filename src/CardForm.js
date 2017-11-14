import React, { Component } from "react";
import Title from "./Title";
import "./CardForm.css";

export class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftTime: 120
    };
    props.onChangeTimeOver(false);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const leftTime = this.state.leftTime - 1;
      this.setState({ leftTime });
      if (leftTime === 0) {
        this.props.onChangeTimeOver(true);
        clearInterval(this.interval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.props.onChangeTimeOver(false);
  }

  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };

  render() {
    const { leftTime } = this.state;
    return (
      <div>
        <Title>Номер карты</Title>
        <p className="left-time">Осталось {leftTime} секунд</p>
        <div className="card-form">
          <input
            type="text"
            name="cardNumber"
            placeholder="0000000000000000"
            value={this.props.cardNumber}
            onChange={this.handleChangeForm}
          />
        </div>
      </div>
    );
  }
}

export default CardForm;
