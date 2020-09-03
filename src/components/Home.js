import React from "react"
import logo from "../img/biglogo.png"
import hampshirepic from "../img/newhampshirepic.jpg"
import styles from './Home.module.css'

function Home() {
    return (
        <div className = {styles.view}>
            <div className = {styles.container}>
                <img className = {styles.logo} src={logo} alt="kyuho lee" width="250" height="181" />
                <img className = {styles.pic} src={hampshirepic} alt="portrait" width="300" height="400" />
                <ul className = {styles.list}>
                    <li><a className = {styles.menuitem} href="/about" title="about">about</a></li>
                    <li><a className = {styles.menuitem} href="/music" title="music">music</a></li>
                    <li><a className = {styles.menuitem} href="/design" title="design">design</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Home