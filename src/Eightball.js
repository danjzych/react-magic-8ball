import React, { useState } from "react";
import getRandomIndex from "./random";
import "./Eightball.css";

function Eightball({ answers }) {
  const [msg, setMsg] = useState();
  const [color, setColor] = useState();

  function handleClick(evt) {
    const idx = getRandomIndex(answers.length);
    setMsg(answers[idx].msg);
    setColor(answers[idx].color);
  }

  return (
    <div
      className="Eightball"
      style={{ backgroundColor: color ? color : "black" }}
      onClick={handleClick}
    >
      <p>{msg ? msg : "Think of a question"}</p>
    </div>
  );
}

export default Eightball;
