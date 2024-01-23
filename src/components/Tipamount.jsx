import React from "react";
import "../styles/tipAmount.css";

const Tipamount = ({ tipPerPerson }) => {
  return (
    <div className="tipAmt">
      <div className="text">
        <h3>Tip Amount</h3>
        <p>/ person</p>
      </div>
      <div className="amount">${tipPerPerson}</div>
    </div>
  );
};

export default Tipamount;
