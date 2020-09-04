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
                        <Route path="/music/original"><MusicOriginal section="desc" /></Route>
                        <Route path="/music/contemporary"><MusicContemporary section="desc"/></Route>
                        <Route path="/music/choir"><MusicChoir section="desc"/></Route>
                    </Switch>
                </div>
                <Switch>
                    <Route exact path="/music"><MusicIndex section="image" /></Route>
                    <Route path="/music/original"><MusicOriginal section="image" /></Route>
                    <Route path="/music/contemporary"><MusicContemporary section="image" /></Route>
                    <Route path="/music/choir"><MusicChoir section="image" /></Route>
                </Switch>
            </div>
        </Router>
    )
}
