import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Navigation } from 'react-mdl';
import './style.css';

function AppBar() {
 return (
  <div className="header">
   <Header title="Map App">
    <Navigation>
     <Link to="/">Main</Link>
     <Link to="/map">Map</Link>
    </Navigation>
   </Header>
  </div>
 )
}

export default AppBar;

