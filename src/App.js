import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Outlet,
  useParams,
  withRouter
} from "react-router-dom";
import Bar from "./components/Bar"
import Home from "./components/Home"

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

// function Home() {
//   return (
//     <div>
//       <h1>Welcome Home!</h1>
//     </div>
//   );
// }
function About() {
  return (
    <div>
      <h1>Welcome About!</h1>
    </div>
  );
}
function Music() {
  return (
    <div>
      <h1>Welcome Music!</h1>
    </div>
  );
}

function MusicIndex() {
  return (
    <div>
      <h1>Welcome Music!</h1>
    </div>
  );
}

function MusicInfo() {
  return (
    <div>
      <h1>Welcome Music!</h1>
    </div>
  );
}

const App = withRouter(({location}) => (
  <div>
    {location.pathname !== "/" && <Bar/>}

  <Switch>
    <Route exact path="/"><Home /></Route>
    <Route path="about"> <About /> </Route>
    <Route path="music" ><Music />
      <Route exact path="/" ><MusicIndex /></Route>
      <Route path=":slug" ><MusicInfo /></Route>
    </Route>
    {/* <Route path="design" ><Design />
      <Route exact path="/" ><DesignIndex /></Route>
      <Route path=":slug" ><DesignInfo /></Route>
    </Route> */}
    <Route path="*" ></Route><NotFound />
  </Switch>
</div>
)
)

export default App

