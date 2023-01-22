import profile from "../../images/user logo.png";
import logo from "../../images/logo.jpeg";
import password from "../../images/passwordlogo.png";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { registerUser } from "../../api";

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.subMain}>
        <div>
          <div className={styles.image}>
            <div className={styles.imageContainer}>
              <img src={logo} alt="profile image" className={styles.profile} />
            </div>
          </div>
          <div>
            <h1 className={styles.loginClass}>LOGIN HERE</h1>
            <div className={styles.firstInput} >
              <img src={profile} alt="username" className={styles.userImage} />
              <input type="text" placeholder="Username" className={styles.name} />
            </div>
            <div className={styles.secondInput}>
              <img src={password} alt="Username" className={styles.passwordImage} />
              <input
                type="password"
                placeholder="*****"
                className={styles.name}
              />
            </div>
            <div className={styles.buttonClass}>
              <button className={styles.login}>Login</button>
              <button className={styles.register}> Register</button>
            </div>
          </div>
          <div className={styles.forgotPassword}>
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;