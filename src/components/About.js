import React from "react"
import styles from "./About.module.css"

function About() {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.head}>Hi!</h1>
                <p className={styles.blurb}>i’m kyuho, a high schooler from the greater boston area. i love to make things, whether it be songs, videos, websites, or graphics. if you’d like to get in touch, send me an email!</p>
            </div>
        </div>
    )
}

export default About