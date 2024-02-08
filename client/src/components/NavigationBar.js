// import React, { Component } from 'react';
// import axios from 'axios';
import { NavLink } from 'react-router-dom';
import '../App.css';

export const NavigationBar = () => {
  // Function to determine the class name based on isActive
  const getNavLinkClass = ({ isActive }) => isActive ? 'nav-link fs-3 me-5 active' : 'nav-link fs-3 me-5';

  return (
    <header className="container-fluid">
      <div className="row align-items-center">
        {/* Logo */}
        <div className="col-md-4">
          <div className="d-flex justify-content-start">
            <NavLink to="/">
              <img src="../img/movierat_logo.png" className="img-fluid" alt="movieRAT! logo"/>
            </NavLink>
          </div>
        </div>

        {/* Welcome and Navigation */}
        <div className="col-md-8 text-end">
          <p className="Welcome float">Welcome, Mike! | <a href="#">Logout</a></p>
          <nav className="navbar navbar-expand-lg navbar-transparent justify-content-end">
            <NavLink className={({ isActive }) => getNavLinkClass({ isActive })} to="/search">Search</NavLink>
            <NavLink className={({ isActive }) => getNavLinkClass({ isActive })} to="/watchlist">Watchlist</NavLink>
            <NavLink className={({ isActive }) => getNavLinkClass({ isActive })} to="/favourites">Favourites</NavLink>
            <NavLink className={({ isActive }) => getNavLinkClass({ isActive })} to="/watched">Watched</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
