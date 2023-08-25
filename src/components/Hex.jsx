import { useState } from "react";
import { colorDatas } from "./data";
import "./Hero.css";

const Hex = () => {
  const [color, setColor] = useState("#f1f5f3");
  console.log(colorDatas.hexColors);
  const changeColorHandler = () => {
    let randomNumber = Math.floor(
      Math.random() * colorDatas.hexColors.length
    );
    document.body.style.backgroundColor = colorDatas.hexColors[randomNumber];
    setColor(colorDatas.hexColors[randomNumber]);
    console.log(color);
  };
  console.log(color);
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
