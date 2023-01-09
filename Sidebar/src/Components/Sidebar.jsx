import React from 'react';
import '../App.css';
import { Sidebarlist } from './Sidebarlist';
import { Setting } from './Setting.jsx';

function Sidebar() {
    return (
        <div className='Sidebar'>
            <div className='sails'>Sails</div>
            <ul className='Sidebardata'>
                {Sidebarlist.map((val, key) => {
                    return (
                        <li key={key}
                            className='row'
                            id={window.location.pathname === val.link ? "active" : " "}
                            onClick={() => { window.location.pathname = val.link; }}>
                            <div id='icon'>{val.icon}</div>
                            <div id='title'>{val.title}</div>
                        </li>
                    );
                })}
            </ul>


            <ul className='Setting'>
                {Setting.map((val, key) => {
                    return (
                        <li key={key}
                            className='row-s'
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