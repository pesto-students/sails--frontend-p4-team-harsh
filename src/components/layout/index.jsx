import React from "react";
import Sidebar from "../sidebar";
import styles from "./index.module.scss";

const Index = (props) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      {props.children}
    </div>
  );
};

export default Index;
