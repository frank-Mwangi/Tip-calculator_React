import React from "react";
import "../styles/buttons.css";

const Buttons = () => {
  //const tip = document.querySelector(".tip").textContent;
  //console.log(tip);
  const handleButtonClick = (e) => {
    const clickedTip = e.target.textContent;
    console.log(clickedTip);
    return clickedTip;
  };
  return (
    <div className="buttons">
      <p>Select Tip %</p>
      <div className="grid1">
        <button className="tip">5%</button>
        <button className="tip">10%</button>
        <button className="tip">15%</button>
      </div>
      <div className="grid2">
        <button className="tip">25%</button>
        <button className="tip">50%</button>
        <button className="tip custom">Custom</button>
      </div>
    </div>
  );
};

export default Buttons;
