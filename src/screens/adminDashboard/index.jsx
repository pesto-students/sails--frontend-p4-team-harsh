import React from "react";
import styles from "./index.module.scss";

const adminDashboard = () => {
  return (
    <div className={styles.adminScreen}>
      <div className={styles.header}><p>Welcome Admin</p></div>
      <div className={styles.main}>
        <div className={styles.container1}>1</div>
        <div className={styles.container2}>2</div>
        <div className={styles.container3}>3</div>
        <div className={styles.container4}>4</div>
      </div>
      <div className={styles.barChart}>bar chart</div>
    </div>
  );
};
export default adminDashboard;
