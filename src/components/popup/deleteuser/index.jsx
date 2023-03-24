import React from "react";
import styles from "./index.module.scss";
import CustomPopup from "../customPopup";

const Index = ({ isOpen, onCloseHandle, message }) => {
  return (
    <CustomPopup isOpen={isOpen} onCloseHandle={onCloseHandle}>
      <div className={styles.deleteUser}>
        <div className={styles.container}>
          <p>{message}</p>
        </div>
        <hr />

        <div className={styles.confirmation}>
          <div className={styles.cancel}>Cancel</div>
          <div className={styles.vertical}></div>
          <div className={styles.delete}>Delete</div>
        </div>
      </div>
    </CustomPopup>
  );
};

export default Index;
