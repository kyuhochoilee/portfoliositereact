import React from "react"
import {
    BrowserRouter as 
    Link,
} from "react-router-dom";
import styles from './Bar.module.css'
import Logo from "../img/longlogo.png"

function Bar() {
    return (
        <nav className={styles.fullbar}>
            <div>
                <a href="/"><img className={styles.logo} src={Logo} alt="kyuho lee" width="200" height="43" /></a>
            </div>
            {/* <a class="navbar-toggle" id="js-navbar-toggle" onclick="myToggle()">
                <i class="fas fa-bars"></i>
            </a> */}
            <ul className={styles.navbar} id="bar">
                <li>
                    <a className = {styles.menuitem} href="/about" title="about">about</a>
                </li>
                <li>
                <a className = {styles.menuitem} href="/music" title="music">music</a>
                </li>
                <li>
                <a className = {styles.menuitem} href="/design" title="design">design</a>
                </li>
                <hr />
            </ul>
        </nav>
    )
}

export default Bar