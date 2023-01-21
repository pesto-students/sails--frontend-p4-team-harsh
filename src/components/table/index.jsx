import React from "react";
import styles from "./index.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const Index = ({ leadsData, openDetail, openDelete, type }) => {
  return (
    <table className={styles.container}>
      <thead>
        <tr>
          {Object.keys(leadsData.data[0]).map((item, index) => (
            <th key={`lead-table-head-${index}`}>{item}</th>
          ))}
          {type === "leads" ? (
            <>
              <th>CTA</th>
              <th>Reschedule</th>
            </>
          ) : (
            <>
              <th>View</th>
              <th>Delete</th>
            </>
          )}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {leadsData.data.map((item, index) => (
          <tr key={`leads-row-${index}`}>
            {Object.values(item).map((value, index) => (
              <td key={`leads-row-data-${index}`}>{value}</td>
            ))}
            {type === "leads" ? (
              <>
                <td>
                  <button>Send Email</button>
                </td>
                <td>
                  <input type="date" />
                </td>
              </>
            ) : (
              <>
                <td>
                  <button onClick={openDetail}>Details</button>
                </td>
                <td>
                  <div className={styles.delete} onClick={openDelete}>
                    <DeleteIcon color="warning" />
                  </div>
                  {/* <button onClick={openDelete}>Delete</button> */}
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Index;
