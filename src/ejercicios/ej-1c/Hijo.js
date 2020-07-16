import React, { Component } from "react";

class Hijo extends Component {
  render() {
    return (
      <div className="alert alert-success">
        <h4>Hijo</h4>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default Hijo;
