// import React, { Component } from 'react';
// import axios from 'axios';
import '../App.css';

export const NavigationBar = () => {
  return (
    <header className="container-fluid">
    <div className="row align-items-center">
      {/* Logo */}
      <div className="col-md-4">
        <div className="d-flex justify-content-start">
          <img src="../img/movierat_logo.png" className="img-fluid" alt="movieRAT! logo" />
        </div>
      </div>

      {/* Welcome and Navigation */}
      <div className="col-md-8 text-end">
        <p className="Welcome float">Welcome, Mike! | <a href="">Logout</a></p>
        <nav className="navbar navbar-expand-lg navbar-transparent justify-content-end">
          <a className="nav-link fs-3 me-5" href="#">Watchlist</a>
          <a className="nav-link fs-3 me-5" href="#">Favourites</a>
          <a className="nav-link fs-3" href="#">Watched</a>
        </nav>
      </div>
    </div>
  </header>
  )
}