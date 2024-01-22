import React from "react";
import "../styles/total.css";

const Total = ({ total }) => {
  return (
    <div className="total">
      <div className="text">
        <h3>Total</h3>
        <p>/ person</p>
      </div>
      <div className="amount">${total}</div>
    </div>
  );
};

export default Total;
