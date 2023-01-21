import React, { useState } from "react";
import styles from "./index.module.scss";
import ConversionRate from "../../conversionrate";
import Tile from "../../admindbtile";
import CustomPopup from "../customPopup";

const Index = ({ isOpen, onCloseHandle }) => {
  const [selectedTab, setSelectedTab] = useState("basic");

  return (
    <CustomPopup isOpen={isOpen} onCloseHandle={onCloseHandle}>
      <div className={styles.popup__container}>
        <div className={styles.tabs}>
          <div
            onClick={() => setSelectedTab("basic")}
            className={`${
              selectedTab === "basic" ? styles["tab--active"] : ""
            } ${styles.tab}`}
          >
            Basic Details
          </div>
          <div
            onClick={() => setSelectedTab("performance")}
            className={`${
              selectedTab === "performance" ? styles["tab--active"] : ""
            } ${styles.tab}`}
          >
            Performance
          </div>
          <button className={styles.close} onClick={onCloseHandle}>
            x
          </button>
        </div>
        {selectedTab === "basic" ? (
          <div className={styles.basicDetail}>
            <div className={styles.popupMain}>
              <form className={styles.form}>
                <label>Name</label>
                <input type="text" id="detail" placeholder="Enter name" />
                <br />

                <label>Role</label>
                <input type="text" id="detail" placeholder="Manager" />
                <br />

                <label> Contact Number</label>
                <input
                  type="text"
                  id="detail"
                  placeholder="Enter contact number"
                />
                <br />

                <label>Email</label>
                <input type="email" id="detail" placeholder="Enter Email" />
                <br />
              </form>
            </div>
          </div>
        ) : (
          <div className={styles.performance}>
            <div className={styles.container}>
              <div className={styles.main}>
                {<Tile message="Team Size" value="10" />}
              </div>
              <div className={styles.subMain}>
                <ConversionRate />
              </div>
            </div>
          </div>
        )}
      </div>
    </CustomPopup>
  );
};

export default Index;
