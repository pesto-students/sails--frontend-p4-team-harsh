
import React from 'react';
import styles from "./index.module.scss";

const resetpassword = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}><p>Reset Password</p></div>
            <div className={styles.reset}>
                <form className="form">
                    <label>
                        Old Password
                        <br />
                        <input type="text" id="oldPassword" placeholder="Enter old password" />
                    </label>
                    <br />

                    <label>
                        New Password
                        <br />
                        <input type="text" id="newPassword" placeholder="Enter new password" />
                    </label>
                    <br />

                    <label>
                        Old Password
                        <br />
                        <input type="text" id="confirmPassword" placeholder="Enter new password" />
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

export default resetpassword







