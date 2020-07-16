import React, { useState } from "react";
import Par from "./Par";
import Impar from "./Impar";

const Contador = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="alert alert-primary">
      <p>Has dado {counter} clicks</p>
      <button onClick={() => setCounter(counter + 1)}>suma 1</button>
      {counter % 2 === 0 ? <Par /> : <Impar />}
    </div>
  );
};

export default Contador;
