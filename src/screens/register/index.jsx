import logo from "../../images/logo.jpeg"
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { registerUser } from "../../api";

const initState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    countryCode: "",
    phone: "",
    role: "",
};

const App = () => {
    const [state, setState] = useState(initState);

    const handleChange = (e) =>
        setState({ ...state, [e.target.name]: e.target.value });

    const register = () => {
        const response = registerUser(state);
        console.log(response);
    };

    useState(() => console.log(state), [state]);

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
                        <h1 className={styles.loginClass}>Register here</h1>
                        <div className={styles.register}>
                            <div className={styles.fullName}>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className={styles.name}
                                    name="firstName"
                                    value={state.firstName}
                                    onChange={handleChange}
                                />
                                <input
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    className={styles.name}
                                    value={state.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={styles.name}
                                value={state.email}
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                className={styles.name}
                                value={state.password}
                                onChange={handleChange}
                            />
                            <input
                                type="number"
                                name="countryCode"
                                placeholder="Country Code"
                                className={styles.name}
                                value={state.countryCode}
                                onChange={handleChange}
                            />
                            <input
                                type="number"
                                name="phone"
                                placeholder="Phone Number"
                                className={styles.name}
                                value={state.phone}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="role"
                                placeholder="Enter Role"
                                className={styles.name}
                                value={state.role}
                                onChange={handleChange}
                            />
                            <div className={styles.button}>
                                <button className={styles.registerButton} onClick={register}>
                                    Register
                                </button>
                                <button className={styles.registerButton} >
                                    Cancel
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default App;