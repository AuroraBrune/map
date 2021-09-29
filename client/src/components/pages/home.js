import React from "react";
// import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./main";
import Map from "./map";

const Home = () => (
 <Router>
  <Switch>
   <Route exact path="/">
    <Main />
   </Route>
   <Route path="/map">
    <Map />
   </Route>
  </Switch>
 </Router>
);

export default Home;