import React from "react";
import styles from "./index.module.scss";
import CustomPopup from "../popup/customPopup";

const Index = ({ isOpen, onCloseHandle }) => {
  return (
    <CustomPopup isOpen={isOpen} onCloseHandle={onCloseHandle}>
      <div className={styles.main}>
        <div className={styles.title}>
          <p>Create New User</p>
        </div>
        <div>
          <form className={styles.form}>
            <label className={styles.label}>
              Name
              <br />
              <input
                className={styles.input}
                type="text"
                id="name"
                placeholder="Enter name"
              />
            </label>
            <br />

            <label className={styles.label}>
              Role
              <br />
              <input
                className={styles.input}
                type="text"
                id="role"
                placeholder="Manager"
              />
            </label>
            <br />

            <label className={styles.label}>
              Contact no
              <br />
              <input
                className={styles.input}
                type="text"
                id="contact"
                placeholder="Enter Contact no"
              />
            </label>
            <br />

            <label className={styles.label}>
              Email
              <br />
              <input
                className={styles.input}
                type="email"
                id="email"
                placeholder="Enter Email"
              />
            </label>
            <br />

            <label className={styles.label}>
              Password
              <br />
              <input
                className={styles.input}
                type="password"
                id="password"
                placeholder="Enter Password"
              />
            </label>
            <br />

            <label className={styles.label}>
              Confirm Password
              <br />
              <input
                className={styles.input}
                type="password"
                id="confirmPassword"
                placeholder="Enter Password"
              />
            </label>
            <br />

            <div className={styles.buttonDiv}>
              <button className={styles.submit}>Submit</button>
              <button className={styles.cancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </CustomPopup>
  );
};

export default Index;
