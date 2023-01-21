import React from "react";
import styles from "./index.module.scss";

const Index = ({ onSubmit, data, handleChange }) => {
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={data.name}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <input
            type="number"
            placeholder="User Count"
            name="userCount"
            value={data.userCount}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <button className="button-primary">Submit</button>
      </form>
    </div>
  );
};

export default Index;
