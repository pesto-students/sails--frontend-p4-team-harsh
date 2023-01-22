import React from "react";
import styles from "./index.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const Index = ({ data, openDetail, openDelete, type, disableUser }) => {
  if (data && data.length) {
    return (
      <table className={styles.container}>
        <thead>
          <tr>
            {Object.keys(data[0]).map((item, index) => (
              <th key={`lead-table-head-${index}`}>{item}</th>
            ))}
            {type === "leads" ? (
              <>
                <th>CTA</th>
                <th>Reschedule</th>
              </>
            ) : type === "companies" ? (
              <>
                <th>Disable</th>
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
          {data.map((item, index) => (
            <tr key={`leads-row-${index}`}>
              {Object.values(item).map((value, index) => (
                <td key={`leads-row-data-${index}`}>{value.toString()}</td>
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
              ) : type === "companies" ? (
                <>
                  <td>
                    <button onClick={disableUser}>Disable</button>
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
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Index;
