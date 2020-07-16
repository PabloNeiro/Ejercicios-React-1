import React, { Component } from "react";

class MyState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: "Hola mundo",
    };
  }
  render() {
    return (
      <div className="alert alert-primary">
        <p>El valor por defecto del estado es: {this.state.myText}</p>
      </div>
    );
  }
}

export default MyState;
