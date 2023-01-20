import React from "react";
import styles from "./index.module.scss";

const Index = ({ leadsData }) => {
  return (
    <table className={styles.container}>
      <thead>
        <tr>
          {Object.keys(leadsData.data[0]).map((item, index) => (
            <th key={`lead-table-head-${index}`}>{item}</th>
          ))}
          <th>CTA</th>
          <th>Reschedule</th>
        </tr>
      </thead>
      <tbody>
        {leadsData.data.map((item, index) => (
          <tr key={`leads-row-${index}`}>
            {Object.values(item).map((value, index) => (
              <td key={`leads-row-data-${index}`}>{value}</td>
            ))}
            <td>
              <button>Send Email</button>
            </td>
            <td>
              <input type="date" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Index;
