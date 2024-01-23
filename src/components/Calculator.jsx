import React, { useState } from "react";
import Input from "./input";
import Buttons from "./Buttons";
import Tipamount from "./Tipamount";
import Total from "./Total";
import Button from "./Button";
import "../styles/calculator.css";

const Calculator = ({ clickedTip }) => {
  return (
    <div className="calculator">
      <aside className="left">
        <Input text="Bill" isBill={true} />
        <Buttons clickedTip={clickedTip} />
        <Input text="Number of People" isBill={false} />
      </aside>
      <aside className="right">
        <Tipamount tipPerPerson={0.0} />
        <Total totalPerPerson={0.0} />
        <Button />
      </aside>
    </div>
  );
};

export default Calculator;
