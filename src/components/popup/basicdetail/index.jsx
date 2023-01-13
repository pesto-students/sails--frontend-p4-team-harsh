import React from "react";
import styles from "./index.module.scss"

function popUp() {
    return (
        <div className={styles.basicDetail}>
            <div className={styles.popupHeader}>
                <p className={styles.title}>Basic Details</p>
                <button className={styles.close}>x</button>
            </div>

            <div className={styles.popupMain}>
                <form className={styles.form}>
                    <label>Name</label>
                    <input type="text" id="detail" placeholder="Enter name" /><br />

                    <label>Role</label>
                    <input type="text" id="detail" placeholder="Manager" /><br />

                    <label> Contact Number</label>
                    <input type="text" id="detail" placeholder="Enter contact number" /><br />

                    <label>Email</label>
                    <input type="email" id="detail" placeholder="Enter Email" /><br />


                </form>
                <div className={styles.performanceButton}>
                    <button className={styles.button}>Performance</button>
                </div>


            </div>
        </div>
    )
}

export default popUp