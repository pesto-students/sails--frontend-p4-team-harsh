import React from "react";
import styles from "./index.module.scss"

function performance() {
    return (
        <div className={styles.performance}>
            <div className={styles.header}>
                <p className={styles.title}>Performance</p>
            </div>
            <div className="container">
                <div className={styles.teamSize}></div>
                <div className={styles.conversionRate}></div>
            </div>

        </div>
    )
}

export default performance;