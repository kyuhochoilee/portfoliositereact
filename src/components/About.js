import React from "react"
import styles from "./About.module.css"
import Hey from "../img/hey.png"
import Arrow from "../img/back.png"

function About() {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img className={styles.hey} src={Hey} alt="hey!" width="300" height="154"/>
                <p className={styles.blurb}>I’m kyuho, a high schooler from the Boston area. I love to make things, whether it be music, websites, or graphics.</p>
                <p className={styles.blurb}> If you’d like to get in touch, feel free to send me an <a href="mailto:kyuhomedia@gmail.com">email!</a></p>
                <a className={styles.button} href="/"> 
                    <img className={styles.arrow} src={Arrow} alt="back" width="15" height="15"/>
                    <p className={styles.text}>home</p>
                </a>
            </div>
        </div>
    )
}

export default About