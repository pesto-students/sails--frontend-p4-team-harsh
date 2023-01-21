import React from "react";
import styles from "./index.module.scss";

const Index = ({ onSubmit, data, handleChange }) => {
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div className={styles.form__row}>
          <div className={styles.form__group}>
            <label htmlFor="register-company-name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              id="register-company-name"
              value={data.name}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="register-company-count">User Count</label>
            <input
              type="number"
              placeholder="Enter User Count"
              name="userCount"
              id="register-company-count"
              value={data.userCount}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div>API Key: {data.apiKey}</div>
        <div>Valid: {data.validity ? "True" : "False"}</div>
        <button className="button-primary">Submit</button>
      </form>
    </div>
  );
};

export default Index;
