import { useState } from "react";
import { colorDatas } from "./data";
import "./Hero.css";

const Hex = () => {
  const [color, setColor] = useState("#f1f5f3");

  const changeColorHandler = () => {
    let hex = "#"

      for (let i = 0; i < 6; i++) {
      const selectedHexColor = Math.floor(Math.random() * colorDatas.hexColors.length);
      hex += colorDatas.hexColors[selectedHexColor]
      }
    
    document.body.style.backgroundColor = hex
    setColor(hex);
 
  };

  return (
    <div className="hero">
      <h1>
        Background Color: <span>{color}</span>
      </h1>
      <button onClick={changeColorHandler}>Change Color</button>
    </div>
  );
};

export default Hex;
