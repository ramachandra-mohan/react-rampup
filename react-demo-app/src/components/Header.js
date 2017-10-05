import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {

  return(
    <header>
      <a className="navbar-brand">Dispatch Console</a>
      <ul className="main-nav">
        <li><NavLink exact to="/">Scheduler</NavLink></li>
        <li><NavLink to="/resource-map">Map</NavLink></li>
        <li><NavLink to="/crew_manager">Crew Manager</NavLink></li>
      </ul>
    </header>
  );
};

export default Header;
