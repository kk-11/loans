import React, { useState } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import gsap from "gsap";

import s from "./styles.module.sass";

const App = () => {
  const [active, setActive] = useState(true);
  const toggleAnimation = () => {
    setActive(!active);
  };
  const activeClass = active ? s.active : null;

  return (
    <main className={s.app} onClick={toggleAnimation}>
      <svg viewBox="0 0 100 100" className={clsx(s.svg, activeClass)}>
        <rect width="100" height="100" mask="url(#hole)" className={s.rect} />
        <mask id="hole">
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="white"
            className={s.rectInside}
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#000000"
            strokeWidth="3"
            className={clsx(s.circle, activeClass)}
          />
          <path
            d="M 12,73 23,15 39,93"
            stroke="#000000"
            strokeWidth="3"
            fill="none"
            strokeMiterlimit="10"
            className={clsx(s.path, activeClass)}
          />
          <text
            className={clsx(s.text, activeClass)}
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
        </mask>
      </svg>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("xxx"));
