import React, { Component } from "react";

class Boton extends Component {
  render() {
    return (
      <button className="btn btn-info" onClick={this.props.sumaClick}>
        suma 1
      </button>
    );
  }
}

export default Boton;
