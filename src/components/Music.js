import React from "react"
import {
    Switch,
    Route,
    Redirect,
    NavLink
} from "react-router-dom";
import MusicOriginal from "./MusicOriginal"
import MusicContemporary from "./MusicContemporary"
import MusicChoir from "./MusicChoir"
import styles from "./Tab.module.css"
import homeMP3 from "../audio/home.mp3"
import dreamingMP3 from "../audio/dreamingaboutyou.mp3"
import chevalierMP3 from "../audio/chevalier.mp3"
import cover1 from "../img/sameoldsong.png"
import "./Shadows.css"


const mySongs = [{
    "name": "home",
    "artist": "EDEN",
    "album": "periscope tapes",
    "url": homeMP3,
    "cover_art_url": cover1
},
{
    "name": "dreaming about you",
    "artist": "EDEN",
    "album": "periscope tapes",
    "url": dreamingMP3,
    "cover_art_url": cover1
},
{
    "name": "Chevalier",
    "artist": "Daniel Caesar",
    "album": "Birds of Paradise EP",
    "url": chevalierMP3,
    "cover_art_url": cover1
}

]

const myContemp = [{
    "name": "Daniel In The Den",
    "about": "Bastille",
    "who": "Lexington High School Rock, Paper, Scissors",
    "where": "",
    "desc": "In light of the pandemic, I organized, soloed, mixed, mastered, and edited a virtual performance for my a cappella group.",
    "url": "https://www.youtube.com/embed/grTHxYK9Gx8?start=15",
},
{
    "name": "First Date/Last Night",
    "about": "Dogfight",
    "who": "Duet with assisting performer Hannah Kim",
    "where": "Lexington High School Follies, February 2019",
    "desc": "A live duet performance at LHS of a musical theater piece.",
    "url": "https://www.youtube.com/embed/gtoN23AUf7A",
}

]

const myChoir = [{
    "name": "Dashing Away With the Smoothing Iron",
    "about": "John Rutter",
    "who": "Lexington High School Madrigal Singers",
    "where": "WGBH Sing That Thing! Season 5",
    "desc": "Our championship-winning performance on WGBH's Sing That Thing!",
    "url": "https://www.youtube.com/embed/ZeGc01ZxqfU",
},
{
    "name": "Sügismaastikud: Kanarbik",
    "about": "Veljo Tormis",
    "who": "Lexington High School Madrigal Singers",
    "where": "Carnegie Hall, January 2019",
    "desc": "Our ensemble was given the incredible honor of performing at Carnegie Hall.",
    "url": "https://www.youtube.com/embed/bRdJC6CuXGY",
}

]

export default function Music() {
    return (
        <div>
            <div>
                <div className={styles.layout}>
                    <div className={styles.tab}>
                        <NavLink to="/music/original" className={styles.tablinks} activeClassName={styles.active}>original compositions</NavLink>
                        <NavLink to="/music/contemporary" className={styles.tablinks} activeClassName={styles.active}>contemporary vocals</NavLink>
                        <NavLink to="/music/choir" className={styles.tablinks} activeClassName={styles.active}>select choir</NavLink>
                    </div>

                    <Switch>
                        <Redirect exact from="/music" to="/music/original" />
                        <Route path="/music/original"><MusicOriginal section="desc" songs={mySongs}/></Route>
                        <Route path="/music/contemporary"><MusicContemporary section="desc" songs={myContemp} /></Route>
                        <Route path="/music/choir"><MusicChoir section="desc" songs={myChoir} /></Route>
                    </Switch>
                </div>
                <Switch>
                    <Redirect exact from="/music" to="/music/original" />
                    <Route path="/music/original"><MusicOriginal section="image" songs={mySongs}/></Route>
                    <Route path="/music/contemporary"><MusicContemporary section="image" songs={myContemp}/></Route>
                    <Route path="/music/choir"><MusicChoir section="image" songs={myChoir}/></Route>
                </Switch>
            </div>
        </div>
    )
}
