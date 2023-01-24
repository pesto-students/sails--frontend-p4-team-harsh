
import React from 'react';
import styles from "./index.module.scss";

const resetPassword = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}><p>Reset Password</p></div>
            <div>
                <form className={styles.form}>
                    <label className={styles.label}>
                        Old Password
                        <br />
                        <input className={styles.input} type="text" id="oldPassword" placeholder="Enter old password" />
                    </label>
                    <br />

                    <label className={styles.label}>
                        New Password
                        <br />
                        <input className={styles.input} type="text" id="newPassword" placeholder="Enter new password" />
                    </label>
                    <br />

                    <label className={styles.label}>
                        Confirm Password
                        <br />
                        <input className={styles.input} type="text" id="confirmPassword" placeholder="Enter new password" />
                    </label>
                    <br />
                    <div className={styles.buttonDiv}>
                        <button className={styles.submit}>Submit</button>
                        <button className={styles.cancel}>Cancel</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default resetPassword







