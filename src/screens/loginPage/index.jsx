// import profile from "./login images/ user logo.png";
// import background from "./login images/logo.jpeg";
// import password from "./login images/passwordlogo.png";
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
    cookies.set("access_token", response.data.access_token, { path: "/" });
  };

  useEffect(() => console.log(state), [state]);

  return (
    <div className={styles.main}>
      <div className={styles.subMain}>
        <div>
          {/* <div className={styles.image}>
            <div className="image-container">
              <img src={background} alt="profile image" className="profile" />
            </div>
          </div> */}
          <div>
            <h1 className={styles.loginClass}>LOGIN HERE</h1>
            <div>
              {/* <img src={profile} alt="username" className="userimage" /> */}
              <input
                type="email"
                placeholder="Enter email"
                className="name"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.secondInput}>
              {/* <img src={password} alt="Username" className="passwordimage" /> */}
              <input
                type="password"
                placeholder="Enter Password"
                className="name"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <div className={styles.buttonClass}>
              <button className="button" onClick={handleLogin}>
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
