import React from "react";
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Bar from "./components/Bar"
import Home from "./components/Home"
import About from "./components/About"
import Music from "./components/Music"
import Design from "./components/Design"


const App = withRouter(({ location }) => (
  <div>
    {location.pathname !== "/" && <Bar active = {location}/>}

    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/music" ><Music /></Route>
      <Route path="/design" ><Design /></Route>
      <Route path="*" ></Route><NotFound />
    </Switch>
  </div>
)
)

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

export default App

