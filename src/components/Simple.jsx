import { useState } from "react";
import { colorDatas } from "./data";
import "./Hero.css"

const Simple = () => {
  const [color, setColor] = useState("white")

  const changeColorHandler = () => {
 let randomNumber = Math.floor(
   Math.random() * colorDatas.simpleColors.length
 );
 document.body.style.backgroundColor = colorDatas.simpleColors[randomNumber];
 setColor(colorDatas.simpleColors[randomNumber])

  }

  return (
    <div className="hero">
      <h1>
        Background Color: <span>{color}</span>
      </h1>
      <button onClick={changeColorHandler}>Change Color</button>
    </div>
  );
}

export default Simple