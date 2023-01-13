import React from "react";
import styles from "./index.module.scss"


function logout() {
    return (
        <div className={styles.logOut}>
            <div className={styles.container}>
                <p>Are you sure you want to logout?</p>
            </div>
            <hr />

            <div className={styles.confirmation}>
                <div className={styles.cancel}>Cancel</div>
                <div className="vertical"></div>
                <div className={styles.logout}>Logout</div>

            </div>


        </div>
    )
}

export default logout