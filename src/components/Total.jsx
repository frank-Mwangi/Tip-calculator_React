import React from "react";
import "../styles/total.css";

const Total = ({ totalPerPerson }) => {
  return (
    <div className="total">
      <div className="text">
        <h3>Total</h3>
        <p>/ person</p>
      </div>
      <div className="amount">${totalPerPerson}</div>
    </div>
  );
};

export default Total;
