

//basic deatils of Manager in Admin Dashboard



import React from "react";
import { Sidebarlist } from "./Sidebarlist";
import { Setting } from "./Sidebarlist";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

function Sidebar() {
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
                className={styles.row}
                id={window.location.pathname === val.link ? "active" : " "}
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
                className={styles["row-s"]}
                id={window.location.pathname === val.link ? "active" : " "}
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
