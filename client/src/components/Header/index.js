import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import './style.css';

function AppBar() {
 return (
  <div className="header">
   <Header title="Map App">

    <Link className="headerLink" to="/">Main</Link>
    <Link className="headerLink" to="/map">Map</Link>

   </Header>
  </div>
 )
}

export default AppBar;

