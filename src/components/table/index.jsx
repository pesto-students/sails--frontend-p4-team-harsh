import React from "react";
import styles from "./index.module.scss";

const Index = ({ leadsData }) => {
  return (
    <table className={styles.container}>
      <tr>
        {Object.keys(leadsData.data[0]).map((item) => (
          <th>{item}</th>
        ))}
        <th>CTA</th>
        <th>Reschedule</th>
      </tr>
      {leadsData.data.map((item) => (
        <tr>
          {Object.values(item).map((value) => (
            <td>{value}</td>
          ))}
          <td>
            <button>Send Email</button>
          </td>
          <td>
            <input type="date" />
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Index;
