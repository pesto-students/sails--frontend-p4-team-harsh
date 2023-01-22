import profile from "../../images/user logo.png";
import password from "../../images/passwordlogo.png";
import logo from "../../images/logo.jpeg"
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { loginUser } from "../../api";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initState = {
  email: "",
  password: "",
};

const App = () => {
  const [state, setState] = useState(initState);
  // const [cookies, setCookie] = useCookies();

  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    const response = await loginUser(state);
    console.log(response);
    localStorage.setItem("userEmail", response.data.user.email);
    localStorage.setItem("userId", response.data.user.id);
    localStorage.setItem("userRole", response.data.user.role);
    localStorage.setItem("companyId", response.data.user.companyId);
    cookies.set("access_token", response.data.access_token, { path: "/" });
  };

  useEffect(() => console.log(state), [state]);

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
            <div className={styles.firstInput}>
              <img src={profile} alt="username" className={styles.userImage} />
              <input
                type="email"
                placeholder="Enter email"
                className={styles.name}
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.secondInput}>
              <img src={password} alt="Username" className={styles.passwordImage} />
              <input
                type="password"
                placeholder="Enter Password"
                className={styles.name}
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <div className={styles.buttonClass}>
              <button className={styles.login} onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
          <div className={styles.forgotPassword}>
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;