import React, { useState } from "react";
import MyLabel from "./MyLabel";
import Boton from "./Boton";

const Contador = () => {
  const [number, setNumber] = useState(0);
  const sumaClick = () => {
    setNumber(number + 1);
  };
  return (
    <div className="alert alert-primary">
      <MyLabel number={number} />
      <Boton sumaClick={sumaClick} />
    </div>
  );
};

export default Contador;
