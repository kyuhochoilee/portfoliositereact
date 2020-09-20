import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import DesignGraphics from "./DesignGraphics"
import styles from "./Design.module.css"
import Arks from "../img/arks.png"
import Chois from "../img/choiscrafts.png"
import Kolex from "../img/kolex.png"
import Rancs from "../img/rancs.png"



const myImages = [{
    "url": Arks,
    "desc": "Hello this is a short description of the website"
},

{
    "url": Chois,
    "desc": "Hello this is a short description of the website"
},

{
    "url": Kolex,
    "desc": "Hello this is a short description of the website"
},

{
    "url": Rancs,
    "desc": "Hello this is a short description of the website"
}

]


export default function Design() {
    return (
        <div>
            <div>
                <h1 className={styles.header}>websites</h1>
            </div>
            <div>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <DesignGraphics images={myImages}/>
        </div>

    )
}
