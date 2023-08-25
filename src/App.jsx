import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Simple from './components/Simple';
import Hex from './components/Simple';

function App() {
  let heroName = false

const simpleClickHandler = () => {
  heroName = true
}
const hexClickHandler = () => {
  heroName = true
};

  return (
    <>
      <Header simpleClick={simpleClickHandler} hexClick={hexClickHandler} />
      {heroName && <Simple />}
      {!heroName && <Hex />}
    </>
  );
}

export default App
