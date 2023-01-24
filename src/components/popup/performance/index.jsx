import React from "react";
import styles from "./index.module.scss";
import Tile from "../../../components/admindbtile";
import ConversionRate from "../../conversionrate";

function performance() {
    return (
        <div className={styles.performance}>
            <div className={styles.header}>
                <p className={styles.title}>Performance</p>
                <button className={styles.close}>x</button>
            </div>
            <div className={styles.container}>
                <div className={styles.main}>{<Tile message="Team Size" value="10" />}</div>
                <div className={styles.subMain}><ConversionRate /></div>
            </div>


        </div >
    )
}

export default performance;