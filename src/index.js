import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Form from "./components/form";
import Loans from "./components/loans";

import s from "./styles.module.sass";

const App = () => {
  const [loans, setLoans] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const json = window.localStorage.getItem("loans");
    const parsed = JSON.parse(json) || [];
    setLoans([...parsed]);
  }, []);

  const toggleForm = (evt) => {
    evt.preventDefault();
    setShowForm(!showForm);
  };

  return (
    <main className={s.app}>
      <button className={s.app} onClick={toggleForm}>
        Add Loan
      </button>
      <Form
        loans={loans}
        active={showForm}
        setLoans={setLoans}
        toggleForm={toggleForm}
      />
      <Loans loans={loans} />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("xxx"));
