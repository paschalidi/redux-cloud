import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ListOfTracks from "./InitialTracks";
import GenreNavigation from "./GenreNavigation";

function App() {
  return (
    <React.Fragment>
      <Router>
        <GenreNavigation />
        <Switch>
          <Route exact path="/">
            <Redirect to="/jazz" />
          </Route>
          <Route exact path="/jazz">
            <ListOfTracks genre="jazz" />
          </Route>
          <Route exact path="/rock">
            <ListOfTracks genre="rock" />
          </Route>
          <Route exact path="/house">
            <ListOfTracks genre="house" />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
