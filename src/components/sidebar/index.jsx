import React from 'react';
// import '../App.css';
import { Sidebarlist } from './Sidebarlist';
import { Setting } from './Sidebarlist';
import styles from './index.module.scss';

function Sidebar() {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sails}>Sails</div>
            <ul className={styles.Sidebardata}>
                {Sidebarlist.map((val, key) => {
                    return (
                        <li key={key}
                            className={styles.row}
                            id={window.location.pathname === val.link ? "active" : " "}
                            onClick={() => { window.location.pathname = val.link; }}>
                            <div id='icon'>{val.icon}</div>
                            <div id='title'>{val.title}</div>
                        </li>
                    );
                })}
            </ul>


            <ul className={styles.Setting}>
                {Setting.map((val, key) => {
                    return (
                        <li key={key}
                            className={styles["row-s"]}
                            id={window.location.pathname === val.link ? "active" : " "}
                            onClick={() => { window.location.pathname = val.link; }}>
                            <div id='icon-s'>{val.icon}</div>
                            <div id='title-s'>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>

    )
}

export default Sidebar;