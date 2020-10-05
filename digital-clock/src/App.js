/****************************************************************
 * Digital clock using react Hooks*
 ****************************************************************/

//We import the useState from React. It lets us keep local state in a function component.
import React, { useState } from "react";

// The useState() function gives us 2 things:
// A variable to hold the state value, in this case, it's called time and a function to change its value, in this case, it's called setTime.
function App() {
  // Here we get the current time and set the state with it
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // A simple JavaScript function to update the time every second.
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
