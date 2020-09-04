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
    "url": "../audio/dreamingaboutyou.mp3",
    "cover_art_url": "../img/sameoldsong.png"
  },
  {
    "name": "Chevalier",
    "artist": "Daniel Caesar",
    "album": "Birds of Paradise EP",
    "url": "../audio/chevalier.mp3",
    "cover_art_url": "../img/sameoldsong.png"
  }
  
];


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
                        <Route path="/music/contemporary"><MusicContemporary section="desc"/></Route>
                        <Route path="/music/choir"><MusicChoir section="desc"/></Route>
                    </Switch>
                </div>
                <Switch>
                    <Route exact path="/music"><MusicIndex section="image" /></Route>
                    <Route path="/music/original"><MusicOriginal section="image" songs={mySongs}/></Route>
                    <Route path="/music/contemporary"><MusicContemporary section="image" /></Route>
                    <Route path="/music/choir"><MusicChoir section="image" /></Route>
                </Switch>
            </div>
        </Router>
    )
}
