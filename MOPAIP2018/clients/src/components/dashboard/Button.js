import React from "react";
import "./dashboard.css";

const Button = ({ name, value, onClick, color, color2, dataTest, type }) => {
  const divStyle = {
    display: "inline"
  };

  return (
    <div style={divStyle}>
      <button
        type={type}
        name={name}
        value={value}
        color={color}
        color2={color2}
        style={divStyle}
        onClick={onClick}
        dataTest={dataTest}
      >
        {name}{" "}
      </button>
    </div>
  );
};

export default Button;
