import React from 'react';
import styles from "./index.module.scss"

const createnewuser = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}><p>Create New User</p></div>
            <div className={styles.subMain}>
                <form className={styles.form}>
                    <label>
                        Name
                        <br />
                        <input type="text" id="name" placeholder="Enter name" />
                    </label>
                    <br />

                    <label>
                        Role
                        <br />
                        <input type="text" id="role" placeholder="Manager" />
                    </label>
                    <br />

                    <label>
                        Contact no
                        <br />
                        <input type="text" id="contact" placeholder="Enter Contact no" />
                    </label>
                    <br />

                    <label>
                        Email
                        <br />
                        <input type="email" id="email" placeholder="Enter Email" />
                    </label>
                    <br />

                    <label>
                        Password
                        <br />
                        <input type="password" id="password" placeholder="Enter Password" />
                    </label>
                    <br />

                    <label>
                        Confirm Password
                        <br />
                        <input type="password" id="confirmPassword" placeholder="Enter Password" />
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

export default createnewuser;