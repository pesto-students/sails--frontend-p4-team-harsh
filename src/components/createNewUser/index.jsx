import React from "react";
import styles from "./index.module.scss";
import CustomPopup from "../popup/customPopup";

const Index = ({
  isOpen,
  onCloseHandle,
  createUserState,
  handleCreateUserStateUpdate,
  handleCreateUserSubmit,
}) => {
  return (
    <CustomPopup isOpen={isOpen} onCloseHandle={onCloseHandle}>
      <div className={styles.main}>
        <div className={styles.title}>
          <p>Create New User</p>
        </div>
        <div>
          <form className={styles.form} onSubmit={handleCreateUserSubmit}>
            <label className={styles.label}>
              Name
              <br />
              <input
                className={styles.input}
                type="text"
                id="firstName"
                name="firstName"
                value={createUserState.firstName}
                onChange={handleCreateUserStateUpdate}
                placeholder="Enter First Name"
              />
              <input
                className={styles.input}
                type="text"
                id="lastName"
                name="lastName"
                value={createUserState.lastName}
                onChange={handleCreateUserStateUpdate}
                placeholder="Enter Last Name"
              />
            </label>
            <br />

            <label className={styles.label}>
              Role
              <br />
              <input
                className={styles.input}
                disabled
                type="text"
                id="role"
                name="role"
                value={createUserState.role}
                onChange={handleCreateUserStateUpdate}
                placeholder="Enter Role"
              />
            </label>
            <br />

            <label className={styles.label}>
              Contact no
              <br />
              <input
                className={styles.input}
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter Phone No."
                value={createUserState.phone}
                onChange={handleCreateUserStateUpdate}
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
                name="email"
                placeholder="Enter Email"
                value={createUserState.email}
                onChange={handleCreateUserStateUpdate}
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
                name="password"
                placeholder="Enter Password"
                value={createUserState.password}
                onChange={handleCreateUserStateUpdate}
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

            <div>
              <input
                className={styles.input}
                type="text"
                id="countryCode"
                name="countryCode"
                placeholder="Enter Country Code"
                value={createUserState.countryCode}
                onChange={handleCreateUserStateUpdate}
              />
            </div>

            <div className={styles.buttonDiv}>
              <button
                className={styles.submit}
                onClick={handleCreateUserSubmit}
              >
                Submit
              </button>
              <button className={styles.cancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </CustomPopup>
  );
};

export default Index;
