// import React, { Component } from 'react';
// import axios from 'axios';
import { NavLink } from 'react-router-dom';
import '../App.css';


export const NavigationBar = () => {
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
        <p className="Welcome float">Welcome, Mike! | <a href="">Logout</a></p>
        <nav className="navbar navbar-expand-lg navbar-transparent justify-content-end">
          <NavLink className="nav-link fs-3 me-5" activeClassName="active" exact to="/search">Search</NavLink>
          <NavLink className="nav-link fs-3 me-5" activeClassName="active" exact to="/watchlist">Watchlist</NavLink>
          <NavLink className="nav-link fs-3 me-5" activeClassName="active" exact to="/favourites">Favourites</NavLink>
          <NavLink className="nav-link fs-3" activeClassName="active" exact to="/watched">Watched</NavLink>
        </nav>
      </div>
    </div>
  </header>
  )
}