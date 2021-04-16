import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Summoner from "Routes/Summoner";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/summoner" exact component={Summoner} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
