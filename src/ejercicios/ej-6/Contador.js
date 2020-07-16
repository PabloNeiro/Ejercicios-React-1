import React, { useState } from "react";

const Contador = () => {
  const [number, setNumber] = useState(0);
  const sumaClick = () => {
    setNumber(number + 1);
  };

  return (
    <div className="alert alert-primary">
      <p>
        <b>Has dado {number} clicks</b>
      </p>
      <button className="btn btn-info" onClick={sumaClick}>
        suma 1
      </button>
    </div>
  );
};

export default Contador;
