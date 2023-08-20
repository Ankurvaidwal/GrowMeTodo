import React from 'react'
import classes from "../styles.module.css";
import SideBar from './SideBar';

const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <span>GrowMeToDo</span>
            <SideBar />
        </div>
    )
}

export default Header