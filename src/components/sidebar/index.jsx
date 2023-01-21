//basic deatils of Manager in Admin Dashboard

import React, { useState, useEffect } from "react";
import { Sidebarlist } from "./Sidebarlist";
import { Setting } from "./Sidebarlist";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeTab, setActiveTab] = useState("./");

  useEffect(() => console.log(activeTab), [activeTab]);

  return (
    <div
      className={styles.sideBar}
      style={{ display: window.location.pathname === "/login" ? "none" : "" }}
    >
      <div className={styles.sails}>Sails</div>
      <ul className={styles.Sidebardata}>
        {Sidebarlist.map((val, key) => {
          return (
            <Link to={val.link} key={key}>
              <li
                className={`${styles.row} ${activeTab === val.link ? styles["row--active"] : ""}`}
                onClick={() => setActiveTab(val.link)}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            </Link>
          );
        })}
      </ul>

      <ul className={styles.Setting}>
        {Setting.map((val, key) => {
          return (
            <Link to={val.link} key={key}>
              <li
                className={`${styles.rowSetting} ${activeTab === val.link ? styles["rowSetting--active"] : ""}`}
                onClick={() => setActiveTab(val.link)}
              >
                <div id="icon-s">{val.icon}</div>
                <div id="title-s">{val.title}</div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
