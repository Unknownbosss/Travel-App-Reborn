import React from "react";
import "./Tour.css";
import { tableData } from "../../constants/enums";

function Tour() {
  const { head, body } = tableData;
  return (
    <section>
      <h2>Upcoming Tour Dates</h2>
      <table>
        <thead>
          <tr>
            {head.map((title, i) => (
              <th key={i}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, i) => (
            <tr key={i}>
              {row.map((data, i) => (
                <td key={i}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Tour;
