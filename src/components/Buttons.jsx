import React from "react";
import "../styles/buttons.css";

const Buttons = () => {
  return (
    <div className="buttons">
      <p>Select Tip %</p>
      <div className="grid1">
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
      </div>
      <div className="grid2">
        <button>25%</button>
        <button>50%</button>
        <button className="custom">Custom</button>
      </div>
    </div>
  );
};

export default Buttons;
