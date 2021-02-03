import React, { useState } from "react";
import ReactDOM from "react-dom";

import s from "./styles.module.sass";

const App = () => {
  const [active, setActive] = useState(false);
  const toggleAnimation = () => {
    setActive(!active);
    console.log("active: ", active);
  };
  const activeClass = active ? s.active : null;
  return (
    <main className={s.app} onClick={toggleAnimation}>
      <svg viewBox="0 0 100 100" className={`${s.svg} ${activeClass}`}>
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="#000000"
          strokeWidth="3"
          className={`${s.circle} ${activeClass}`}
        />
        <polyline
          points="12,73 23,15 39,93"
          fill="none"
          stroke="#000000"
          strokeWidth="3"
          strokeMiterlimit="10"
          className={`${s.poly} ${activeClass}`}
        >
          <animate
            attributeName="points"
            dur="1.3s"
            from="0,0 0,0 0,0"
            to="12,73 23,15 39,93"
          />
        </polyline>
        <text
          className={`${s.text} ${activeClass}`}
          style={{
            fontFamily: "Futura-Medium",
            transform: "translate(34px, 59px)",
            fontSize: "28px",
          }}
        >
          <tspan className={s.tspan}>l</tspan>
          <tspan className={s.tspan}>t</tspan>
          <tspan className={s.tspan}>h</tspan>
          <tspan className={s.tspan}>O</tspan>
        </text>
      </svg>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("xxx"));
