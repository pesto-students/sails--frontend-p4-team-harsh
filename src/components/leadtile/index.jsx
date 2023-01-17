import React from "react";
import styles from './index.module.scss';

const tile = ({ message, value }) => {
    return (
        <div className={styles.main}>
            <div className={styles.title}><p>{message}</p></div>
            <hr />
            <div className={styles.count}><p>{value}</p></div>
        </div>

    )
}

export default tile;