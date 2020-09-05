import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Outlet,
    useParams,
    withRouter
} from "react-router-dom";
import MusicIndex from "./MusicIndex"
import MusicOriginal from "./MusicOriginal"
import MusicContemporary from "./MusicContemporary"
import MusicChoir from "./MusicChoir"
import styles from "./Tab.module.css"
import homeMP3 from "../audio/home.mp3"
import dreamingMP3 from "../audio/dreamingaboutyou.mp3"
import chevalierMP3 from "../audio/chevalier.mp3"
import cover1 from "../img/sameoldsong.png"


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
    "desc": "In light of the pandemic, i organized, soloed, and edited a virtual performance by my a cappella group.",
    "url": "https://www.youtube.com/embed/grTHxYK9Gx8",
},
{
    "name": "First Date/Last Night",
    "about": "Dogfight",
    "who": "Duet with assisting performer Hannah Kim",
    "where": "Lexington High School Follies, February 2019",
    "desc": "A live duet performance at LHS of a musical theater piece.",
    "url": "https://www.youtube.com/embed/IaGVAU5WY68",
}

]

const myChoir = [{
    "name": "Be for Me the Earth",
    "about": "Nathan Jones",
    "who": "Lexington High School Madrigal Singers",
    "where": "WGBH Sing That Thing! Season 5",
    "desc": "Our championship-winning performance of Be for Me the Earth on WGBH's Sing That Thing!",
    "url": "https://www.youtube.com/embed/grTHxYK9Gx8",
},
{
    "name": "Pied Beauty",
    "about": "???",
    "who": "Lexington High School Madrigal Singers",
    "where": "Carnegie Hall, January 2019",
    "desc": "Our ensemble was given the incredible honor of performing at Carnegie Hall.",
    "url": "https://www.youtube.com/embed/grTHxYK9Gx8",
}

]

export default function Music() {
    return (
        <Router>
            <div>
                <div className={styles.layout}>
                    <div className={styles.tab}>
                        <Link to="/music" className={styles.tablinks}>resumé</Link>
                        <Link to="/music/original" className={styles.tablinks}>original compositions</Link>
                        <Link to="/music/contemporary" className={styles.tablinks}>contemporary vocals</Link>
                        <Link to="/music/choir" className={styles.tablinks}>select choir</Link>
                    </div>

                    <Switch>
                        <Route exact path="/music"><MusicIndex section="desc" /></Route>
                        <Route path="/music/original"><MusicOriginal section="desc" songs={mySongs}/></Route>
                        <Route path="/music/contemporary"><MusicContemporary section="desc" songs={myContemp} /></Route>
                        <Route path="/music/choir"><MusicChoir section="desc" songs={myChoir} /></Route>
                    </Switch>
                </div>
                <Switch>
                    <Route exact path="/music"><MusicIndex section="image" /></Route>
                    <Route path="/music/original"><MusicOriginal section="image" songs={mySongs}/></Route>
                    <Route path="/music/contemporary"><MusicContemporary section="image" songs={myContemp}/></Route>
                    <Route path="/music/choir"><MusicChoir section="image" songs={myChoir}/></Route>
                </Switch>
            </div>
        </Router>
    )
}
