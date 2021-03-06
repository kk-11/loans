import React, { useState } from "react";
import useMediaQuery from "use-mediaquery";

import ReactDOM from "react-dom";
import clsx from "clsx";

import s from "./styles.module.sass";

const App = () => {
  const [active, setActive] = useState(false);
  const toggleAnimation = () => {
    setActive(!active);
  };
  const activeClass = active ? s.active : null;

  const desktop = useMediaQuery("(min-width: 1024px)");

  return (
    <main className={s.app} onClick={toggleAnimation}>
      <svg
        viewBox="0 0 100 100"
        className={clsx(s.svg, s.inverse, activeClass)}
      >
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
      </svg>
      <svg viewBox="0 0 100 100" className={clsx(s.svg, activeClass)}>
        <rect
          width={desktop ? "400" : "100"}
          height="300"
          y={desktop ? "0" : "-60"}
          x={!desktop ? "0" : "-50"}
          mask="url(#hole)"
          className={s.rect}
        />
        <mask id="hole">
          <rect
            width={desktop ? "400" : "100"}
            height="300"
            y={desktop ? "0" : "-60"}
            x={!desktop ? "0" : "-50"}
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
