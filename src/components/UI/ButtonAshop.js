import React from "react";

const ButtonAshop = (props) => {
  return (
    <div>
      <button className="button" onClick={props.onClick} style={props.style}>
        {props.children}
      </button>
    </div>
  );
};

export default ButtonAshop;
