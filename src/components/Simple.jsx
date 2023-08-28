import { useState } from "react";
import { colorDatas } from "./data";
import "./Hero.css"

const Simple = () => {
  const [color, setColor] = useState("white")

  const changeColorHandler = () => {

 const selectedSimpleColor = Math.floor(
   Math.random() * colorDatas.simpleColors.length
 );

 const simpleColor = colorDatas.simpleColors[selectedSimpleColor];
 
 document.body.style.backgroundColor = simpleColor
 setColor(simpleColor)

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