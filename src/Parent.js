import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);   // initial value for color state
  const [childrenColor, setChildrenColor] = useState("#FFF");  // variable to keep track of the color of the Child componenets using state

  // newChildColor taken in to send data back to the parent
  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);  // update color state to a new value
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      {/* passing the data that represents color of Child components down to Parent */}
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
