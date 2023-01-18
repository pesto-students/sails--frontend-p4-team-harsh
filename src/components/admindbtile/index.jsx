import React from "react";
import styles from './index.module.scss';
import Up from '@mui/icons-material/ArrowCircleUp';
import Down from '@mui/icons-material/ArrowCircleDown';


const tile = ({ message, value }) => {
    return (
        <div className={styles.main}>
            <div className={styles.title}><p>{message}</p></div>

            <div className={styles.count}><p>{value}</p></div>
        </div>

    )
}

export default tile;