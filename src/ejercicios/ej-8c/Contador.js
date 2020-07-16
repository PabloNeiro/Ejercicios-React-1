import React from "react";
import Par from "./Par";
import Impar from "./Impar";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="alert alert-primary">
        <p>Has dado {this.state.counter} clicks</p>
        <button
          onClick={() =>
            this.setState({ ...this.state, counter: this.state.counter + 1 })
          }
        >
          suma 1
        </button>
        {this.state.counter % 2 === 0 ? <Par /> : <Impar />}
      </div>
    );
  }
}
export default Contador;
