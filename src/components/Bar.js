import React from "react"
import {
    BrowserRouter as 
    Link,
    NavLink,
    Router,
    Route,
    Switch,
} from "react-router-dom";
import styles from './Bar.module.css'
import Logo from "../img/longlogo.png"

function Bar(props) {
    return (
        <div className={styles.fullbar}>
            <div>
                 <a href="/"><img className={styles.logo} src={Logo} alt="kyuho lee" width="200" height="43" /></a>
            </div>
            <nav className={styles.navbar} id="bar">
                <NavLink activeClassName={styles.active} className={styles.menuitem} to='/about' title="about">about</NavLink>
                <NavLink activeClassName={styles.active} className={styles.menuitem} to='/music' title="music">music</NavLink>
                <NavLink activeClassName={styles.active} className={styles.menuitem} to='/design' title="design">design</NavLink>
            </nav>
        </div>
    )
}

export default Bar