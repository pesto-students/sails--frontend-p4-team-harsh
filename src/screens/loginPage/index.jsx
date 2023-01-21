// import profile from "./login images/ user logo.png";
// import background from "./login images/logo.jpeg";
// import password from "./login images/passwordlogo.png";
import React from "react";
import styles from './index.module.scss';

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.subMain}>
        <div>
          <div className={styles.image}>
            {/* <div className="image-container">
              <img src={background} alt="profile image" className="profile" />
            </div> */}
          </div>
          <div>
            <h1 className={styles.loginClass}>LOGIN HERE</h1>
            <div>
              {/* <img src={profile} alt="username" className="userimage" /> */}
              <input type="text" placeholder="Username" className="name" />
            </div>
            <div className={styles.secondInput}>
              {/* <img src={password} alt="Username" className="passwordimage" /> */}
              <input
                type="password"
                placeholder="***********"
                className="name"
              />
            </div>
            <div className={styles.buttonClass}>
              <button className="button">Login</button>
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
