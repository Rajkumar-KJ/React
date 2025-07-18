import React, { useState } from 'react';
import './App.css';

function Condition() {
  const [set, setVal] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div id="div2">
      <center>
        <button id="btn1" onClick={() => setVal(!set)}>Toggle Color</button>
        <div id="div1" style={{ backgroundColor: set ? "red" : "black", color: "white", padding: "10px" }}>
          Hello
        </div>
      </center>

      <button onClick={() => setOpen(!open)}>Toggle Open</button>

      {/* Conditional Rendering Using State */}
      <p>{open && "open"}</p>
      <p>{open ? "pass" : "fail"}</p>
    </div>
  );
}

export default Condition;
