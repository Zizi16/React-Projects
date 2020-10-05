//We import the useState Hook from React. It lets us keep local state in a function component.
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // Declare a new state variable, called "colorIndex"
  // and we call the useState Hook directly inside our component
  // What does useState return? It returns a pair of values: the current state and a function that updates it. This is why we write const [colorIndex, setColorIndex] = useState().
  // Why these are in the square bracets? This JavaScript syntax is called “array destructuring”. It means that we’re making two new variables colorIndex and setColorIndex, where colorIndex is set to the colorIndex value returned by useState, and setColorIndex is the second.
  const [colorIndex, setColorIndex] = useState(0);

  // Declare a variable for colors
  const colors = ["pink", "lightgray", "lightblue", "orange"];
  // Declare a variable for color index
  const getColorIndex = colors[colorIndex];

  // When the user clicks, we call setColorIndex with a new value.
  // React will then re-render the  component, passing the new colorIndex value to it.
  function handleChangeIndex() {
    const next = colorIndex + 1 === colors.length ? 0 : colorIndex + 1;
    setColorIndex(next);
  }

  return (
    <div style={{ background: getColorIndex }} className="App">
      <h1>Colour: {getColorIndex}</h1>
      <button onClick={handleChangeIndex}>
        Click to Change background color
      </button>
    </div>
  );
}
