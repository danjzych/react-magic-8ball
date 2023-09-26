import React, { useState } from "react";
import getRandomIndex from "./random";
import "./Eightball.css";

/** Answers questions with random advice like 8-ball game.
 *
 * Props:
 *  -answers (array)
 *
 * State:
 *  -msg: string
 *  -color: string
 *
 * App -> Eightball
 */

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
