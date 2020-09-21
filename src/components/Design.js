import React from "react"
import DesignGraphics from "./DesignGraphics"
import styles from "./Design.module.css"
import Arks from "../img/arks.png"
import Chois from "../img/choiscrafts.png"
import Kolex from "../img/kolex.png"
import Rancs from "../img/rancs.png"
import Media from "../img/kyuhomedia.png"



const myImages = [{
    "url": Arks,
    "title": "ARKS Productions",
    "desc": "ARKS Productions creates virtual performances for a cappella groups and other musical ensembles unable to make music due to the pandemic.",
    "link": "https://www.arksproductions.com/"
},

{
    "url": Media,
    "title": "Kyuho Media",
    "desc": "The portfolio website I created at my summer class at Harvard Summer School, CSCI E-12 Fundamentals of Website Development. I utilized HTML, CSS, and Javascript to create this site.",
    "link": "https://kyuhomedia.com/"
},
{
    "url": Kolex,
    "title": "Korean-American Organization of Lexington",
    "desc": "I have been volunteering with the Korean-American Organization of Lexington (KOLex) for the past five years. I completely replaced their old website with a brand new site, and maintained the site, writing blog updates and managing new events.",
    "link": "https://working.kolex.org/"
},
{
    "url": Rancs,
    "title": "Rancatore's Ice Cream & Yogurt",
    "desc": "I have been working at Rancatore's since early 2019. When the Coronavirus pandemic hit, my manager hired me to renovate and redesign the website to be compatible with online ordering.",
    "link": "https://www.rancs.com/"
},

{
    "url": Chois,
    "title": "Choi's Crafts",
    "desc": "Choi's Crafts is a family-run business that sells crafts made to order. I created the website and took all of the photos for it as well.",
    "link": "https://choiscrafts.wixsite.com/choiscrafts"
},

]


export default function Design() {
    return (
        <div>
            <div className={styles.grid}>
                <h1 className={styles.header}>websites</h1>
                <p className={styles.description}>After learning the basics of front to back-end website development in a summer class, I applied my skills to the real world, creating much-needed websites for local organizations and businesses. I primarily create websites using React.js and Gatsby, but I have also used plain HTML/CSS/JS, WordPress, and Wix. Click the title of each slide to be taken to the live website.</p>
            </div>
            <DesignGraphics images={myImages}/>
        </div>

    )
}
