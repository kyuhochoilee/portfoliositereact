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
import findit from "../audio/findit.mp3"
import anyways from "../audio/anyways.mp3"
import isolated from "../audio/isolated.mp3"
import give from "../audio/giveusahand.mp3"
import cover1 from "../img/findit.png"
import cover2 from "../img/anyways.png"
import cover3 from "../img/isolated.png"
import cover4 from "../img/giveusahand.png"
import "./Shadows.css"


const mySongs = [{
    "name": "find it",
    "artist": "kyuho",
    "album": "my life",
    "url": findit,
    "cover_art_url": cover1
},
{
    "name": "anyways",
    "artist": "kyuho",
    "album": "my life",
    "url": anyways,
    "cover_art_url": cover2
},
{
    "name": "isolated",
    "artist": "kyuho",
    "album": "my life",
    "url": isolated,
    "cover_art_url": cover3
},
{
    "name": "give us a hand",
    "artist": "kyuho",
    "album": "my life",
    "url": give,
    "cover_art_url": cover4
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
    "name": "We All Belong",
    "about": "Original Composition",
    "who": "Lexington High School Rock, Paper, Scissors",
    "where": "",
    "desc": "A virtual performance by my a cappella group of “We All Belong”, an anthem for the Lexington Public Schools system commissioned by the School Committee.",
    "url": "https://www.youtube.com/embed/y0btQeU2TMk"
},

{
    "name": "First Date/Last Night",
    "about": "Dogfight",
    "who": "Duet with assisting performer Hannah Kim",
    "where": "Lexington High School Follies, February 2019",
    "desc": "A live duet performance at LHS of a musical theater piece.",
    "url": "https://www.youtube.com/embed/gtoN23AUf7A",
},

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
    "name": "The Star-Spangled Banner",
    "who": "Lexington High School Madrigal Singes",
    "where": "Lexington High School Virtual Graduation 2020",
    "desc": "I edited, mixed, and mastered a virtual performance of the National Anthem played in the beginning of LHS's virtual graduation.",
    "url":"https://www.youtube.com/embed/clhmVRKhv_k",
},
{
    "name": "Sügismaastikud: Kanarbik",
    "about": "Veljo Tormis",
    "who": "Lexington High School Madrigal Singers",
    "where": "Carnegie Hall, January 2019",
    "desc": "Our ensemble was given the incredible honor of performing at Carnegie Hall.",
    "url": "https://www.youtube.com/embed/bRdJC6CuXGY",
},



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
