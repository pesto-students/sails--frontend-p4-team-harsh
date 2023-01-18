import React from "react";
import styles from "./index.module.scss";
import Tile from "../../../components/admindbtile"

function performance() {
    return (
        <div className={styles.performance}>
            <div className={styles.title}><p>Performance</p></div>
            <div className={styles.container}>
                <div className={styles.main}>{<Tile message="Team Size" value="10" />}</div>
                <div className={styles.subMain}><p></p></div>
            </div>
        </div >
    )
}

export default performance;