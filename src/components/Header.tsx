import React from 'react'
import classes from "../styles.module.css";
import SideBar from './SideBar';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <span>
                <Link to={'/'} style={{ textDecoration: 'none' }}>GrowMeToDo</Link>
            </span>
            <SideBar />
        </div>
    )
}

export default Header