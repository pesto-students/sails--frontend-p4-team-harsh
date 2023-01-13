import React from "react";
import styles from './index.module.scss'

function deleteUser({ message }) {
    return (
        <div className={styles.deleteUser}>
            <div className={styles.container}>
                {/* <p>Are you sure you want to delete user?</p> */}
                <p>{message}</p>
            </div>
            <hr />

            <div className={styles.confirmation}>
                <div className={styles.cancel}>Cancel</div>
                <div className={styles.vertical}></div>
                <div className={styles.delete}>Delete</div>

            </div>


        </div>
    )
}

export default deleteUser