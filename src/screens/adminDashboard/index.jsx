import React from "react";
import styles from "./index.module.scss";
import Tile from "../../components/admindbtile";

const adminDashboard = () => {
  return (
    <div className={styles.adminScreen}>
      <div className={styles.header}><p>Welcome Admin</p></div>
      <div className={styles.containerMain}>
        <div className={styles.main}>
          <div className={styles.container1}><Tile message="New Leads" value="1000" /></div>
          <div className={styles.container2}><Tile message="Converted Leads" value="500" /></div>
          <div className={styles.container3}><Tile message="Monthly Conversion" value="30" /></div>
        </div>
        <div className={styles.subMain}>
          <div className={styles.barChart}>bar chart</div>
          <div className={styles.container4}>4</div>
        </div>
      </div>
    </div>
  );
};
export default adminDashboard;
