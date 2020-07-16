import React from "react";

const Hijo = (props) => {
  const lukesMessage = "NOOOOOO!";

  return (
    <div className="alert alert-success">
      <h4>Hijo</h4>
      <button
        className="btn btn-info"
        onClick={() => props.function(lukesMessage)}
      >
        ¡Dar click aquí!
      </button>
    </div>
  );
};

export default Hijo;
