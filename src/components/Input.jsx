import React from "react";
import "../styles/input.css";

const Input = ({ text }) => {
  return (
    <div className="input">
      <p>{text}</p>
      <input type="text" />
    </div>
  );
};

export default Input;
