import React, { Component } from "react";

class Hijo extends Component {
  lukesMessage = "NOOOOOO!";
  render() {
    return (
      <div className="alert alert-success">
        <h4>Hijo</h4>
        <button
          className="btn btn-info"
          onClick={(myFunction) => this.props.function(this.lukesMessage)}
        >
          ¡Dar click aquí!
        </button>
      </div>
    );
  }
}

export default Hijo;
