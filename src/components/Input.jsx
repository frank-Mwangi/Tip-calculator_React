import React, { useRef } from "react";
import "../styles/input.css";

const Input = ({ text, isBill, onBlur }) => {
  return (
    <div className="input">
      <p>{text}</p>
      <input type="text" className={isBill ? "bill" : "people"} />
    </div>
  );
};

export default Input;
