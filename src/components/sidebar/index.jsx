//basic deatils of Manager in Admin Dashboard

import React, { useState, useEffect } from "react";
import { Sidebarlist } from "./Sidebarlist";
import { Setting } from "./Sidebarlist";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

function Sidebar() {
  const [activeTab, setActiveTab] = useState("./");

  const cookies = new Cookies();

  const handleLogout = () => {
    cookies.remove("access_token");
    localStorage.clear();
    window.location.href = "/login";
  };

  const getAuth = () => {
    const accessToken = cookies.get("access_token");
    console.log(accessToken);
  };

  useEffect(() => {
    getAuth();
  }, []);

  useEffect(() => setActiveTab(`.${window.location.pathname}`), [activeTab]);

  return (
    <div
      className={styles.sideBar}
      style={{
        display:
          window.location.pathname === "/login" ||
          window.location.pathname === "/register"
            ? "none"
            : "",
      }}
    >
      <div className={styles.sails}>Sails</div>
      <ul className={styles.Sidebardata}>
        {Sidebarlist.map((val, key) => {
          return (
            <Link to={val.link} key={key}>
              <li
                className={`${styles.row} ${
                  activeTab === val.link ? styles["row--active"] : ""
                }`}
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
        {Setting.map((val, index) => {
          return (
            <Link to={val.link} key={index}>
              <li
                className={`${styles.rowSetting} ${
                  activeTab === val.link ? styles["rowSetting--active"] : ""
                }`}
                onClick={() => {
                  index === 2 ? handleLogout() : setActiveTab(val.link);
                }}
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
