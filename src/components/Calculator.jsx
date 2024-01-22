import React from "react";
import Input from "./input";
import Buttons from "./Buttons";
import Tipamount from "./Tipamount";
import Total from "./Total";
import Button from "./Button";
import "../styles/calculator.css";
const Calculator = () => {
  return (
    <div className="calculator">
      <aside className="left">
        <Input text="Bill" />
        <Buttons />
        <Input text="Number of People" />
      </aside>
      <aside className="right">
        <Tipamount />
        <Total />
        <Button />
      </aside>
    </div>
  );
};

export default Calculator;
