import React from "react";
import styles from "./index.module.scss";

const Index = ({ children, isOpen, onCloseHandle }) => {
  return (
    <div
      className={styles.containerMain}
      style={{ display: isOpen ? "" : "none" }}
    >
      <div className={styles.container}>
        <div>{children}</div>
      </div>
      <div className={styles.overlay} onClick={onCloseHandle}>
        &nbsp;
      </div>
    </div>
  );
};

export default Index;
