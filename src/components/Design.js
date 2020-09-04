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
import DesignIndex from "./DesignIndex"
import DesignWebsites from "./DesignWebsites"
import DeisgnGraphics from "./DesignGraphics"


export default function Design() {
    return (
        <Router>
            <div>
                <div>
                    <Link to="/design">resume</Link>
                    <Link to="/design/websites">websites</Link>
                    <Link to="/design/graphics">graphics</Link>
                </div>
                <Switch>
                    <Route exact path="/design"><DesignIndex /></Route>
                    <Route path="/design/websites"><DesignWebsites /></Route>
                    <Route path="/design/graphics"><DeisgnGraphics /></Route>
                </Switch>
            </div>
        </Router>
    )
}
