import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  sumaClick = () => {
    this.setState({ ...this.state, number: this.state.number + 1 });
  };
  render() {
    return (
      <div className="alert alert-primary">
        <p>
          <b>Has dado {this.state.number} clicks</b>
        </p>
        <button className="btn btn-info" onClick={this.sumaClick}>
          suma 1
        </button>
      </div>
    );
  }
}
export default Contador;
