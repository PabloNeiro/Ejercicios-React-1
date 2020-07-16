import React from "react";
import MyLabel from "./MyLabel";
import Boton from "./Boton";

class Contador extends React.Component {
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
        <MyLabel number={this.state.number} />
        <Boton sumaClick={this.sumaClick} />
      </div>
    );
  }
}
export default Contador;
