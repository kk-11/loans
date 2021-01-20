import React from "react";
import clsx from "clsx";

import s from "./loans.module.sass";

export default function Loans({ loans }) {
  const totals = loans.reduce(
    (acc, curr) => ({
      amount: +curr.amount + +acc.amount,
      fees: +curr.fees + +acc.fees,
      apr: +curr.apr + +acc.apr,
      weight: +acc.weight + +curr.amount * (+curr.apr / 100),
    }),
    { amount: 0, fees: 0, apr: 0, weight: 0 }
  );

  const totalApr = ((totals.weight / totals.amount) * 100).toFixed(2);

  return (
    <table className={s.table}>
      <tbody>
        <tr className={clsx(s.row, s.head)}>
          <th scope="col">Creditor</th>
          <th scope="col">Loan Amount</th>
          <th scope="col">Fees</th>
          <th scope="col">APR</th>
        </tr>
        {loans.map(
          ({ creditor = "No creditor", amount = 0, fees = 0, apr = 0 }, i) => {
            return (
              <tr key={i} className={s.row}>
                <td>{creditor}</td>
                <td>{amount} kr</td>
                <td>{fees} kr</td>
                <td>{apr}%</td>
              </tr>
            );
          }
        )}
        {totals.amount !== 0 && (
          <tr className={clsx(s.row, s.totals)}>
            <th scope="row">Totals</th>
            <td>{totals.amount} kr</td>
            <td>{totals.fees} kr</td>
            <td>{+totalApr}%</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
