import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      message: "This is Countdown",
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    const { message } = this.state;
    return (
      <div className="customCard">
        <h2 className='p-3'>count: {count}</h2>
        <Button className="fw-bold px-5 m-3" onClick={this.handleIncrement} disabled={count === 20 ? true : false}>
          {" "}
          +{" "}
        </Button>
        <Button className="fw-bold px-5 m-3" onClick={this.handleDecrement} disabled={count === 0 ? true : false}>
          {" "}
          -{" "}
        </Button>
      </div>
    );
  }
}
