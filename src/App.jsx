import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Simple from "./components/Simple";
import Hex from "./components/Hex";

function App() {
  const [mode, setMode] = useState("hex");

  const simpleClickHandler = () => {
    setMode("simple")
    document.body.style.backgroundColor = "white"
  };
  const hexClickHandler = () => {
    setMode("hex")
    document.body.style.backgroundColor = "white";
  };

  if (mode === "hex") {
    return (
      <>
        <Header simpleClick={simpleClickHandler} hexClick={hexClickHandler} />
        <Hex />
      </>
    );
  }

  if (mode === "simple") {
    return (
      <>
        <Header simpleClick={simpleClickHandler} hexClick={hexClickHandler} />
        <Simple />
      </>
    );
  }
}

export default App;
