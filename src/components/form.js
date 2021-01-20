import React, { useState } from "react";
import clsx from "clsx";

import s from "./form.module.sass";

const init = {
  creditor: "Big Bank",
  amount: 100000,
  fees: 20,
  apr: 7,
};

export default function Form({ loans = [], setLoans, active, toggleForm }) {
  const [state, setState] = useState(init);
  const { creditor, amount, fees, apr } = state;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newLoans = [...loans, state];
    setLoans(newLoans);
    window.localStorage.setItem("loans", JSON.stringify(newLoans));
    toggleForm(evt);
  };

  const handleChange = (evt, type) => {
    setState({
      ...state,
      [type]: evt.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(s.form, active ? s.active : null)}
    >
      <label>Creditor Name:</label>
      <input
        type="text"
        value={creditor}
        onChange={(evt) => handleChange(evt, "creditor")}
      />
      <label>Loan Amount:</label>
      <input
        type="number"
        value={amount}
        onChange={(evt) => handleChange(evt, "amount")}
      />
      <label>Monthly Fees:</label>
      <input
        type="number"
        value={fees}
        onChange={(evt) => handleChange(evt, "fees")}
      />
      <label>APR:</label>
      <input
        type="number"
        value={apr}
        onChange={(evt) => handleChange(evt, "apr")}
      />
      <input type="submit" value="Save" />
    </form>
  );
}
