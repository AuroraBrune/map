import React from "react";
import Main from "./main";
import Map from "./map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function Home() {
 return(
  <Switch>
   <Route exact path="/" component={Main} /> 
   <Route path="/map" component={Map} />
  </Switch>
 );
}
export default Home;