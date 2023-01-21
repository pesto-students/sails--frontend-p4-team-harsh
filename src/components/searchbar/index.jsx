import React from 'react';
import styles from "./index.module.scss";

const searchBar = () => {
    return (
        <div className={styles.main}>
            <form className={styles.searchBar}>
                <input className="input" type="text" placeholder="search here" />
            </form>
        </div>
    )
}

export default searchBar