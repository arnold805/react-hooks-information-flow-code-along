import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  console.log(onChangeColor);

  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  return (
    // when this div is clicked, it will use onChangeColor variable to determine what function to run
    // onChangeColor is a prop that is passed down from the Parent component, which references the handleChangeColor function
    // The handleChangeColor function is the function that will actually run when the div is clicked, and will update state
    //    in the Parent component
    <div
      onClick={handleClick}
      className="child"
      // pass in the color props data into Child component
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;
