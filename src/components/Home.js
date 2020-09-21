import React from "react"
import logo from "../img/biglogo.png"
import logo2 from "../img/longlogo.png"
import hampshirepic from "../img/newhampshirepic.jpg"
import styles from './Home.module.css'

function Home() {
    return (
        <div className = {styles.view}>
            <div className = {styles.container}>
                <img width="250" height="181" className = {styles.logo} src={logo} alt="kyuho lee"  />
                <img width="250" height="54" className = {styles.logo2} src={logo2} alt="kyuho lee"  />
                <img width="300" height="400" className = {styles.pic} src={hampshirepic} alt="portrait"  />
                <ul className = {styles.list}>
                    <li><a className = {styles.menuitem} href="/about" title="about">about</a></li>
                    <li><a className = {styles.menuitem} href="/music" title="music">music</a></li>
                    <li><a className = {styles.menuitem} href="/design" title="webs">web</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Home