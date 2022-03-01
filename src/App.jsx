import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);

  const newColor = color === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => {
          setColor(newColor);
        }}
        disabled={isChecked}
      >
        Change to {newColor}
      </button>

      <input
        type="checkbox"
        name=""
        id="disable-button"
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
      <label htmlFor="disable-button" id="disable-button">
        Disable button
      </label>
    </div>
  );
}

export default App;
