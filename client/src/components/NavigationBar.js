import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../App.css';

export const NavigationBar = () => {
  // Get the current location using React Router's useLocation hook
  const location = useLocation();

  // Function to determine the class name based on isActive
  const getNavLinkClass = ({ isActive }) => isActive ? 'nav-link fs-3 ms-lg-5 me-lg-0 ms-sm-3 me-sm-3 ms-xs-3 mx-xs-3 active' : 'nav-link fs-3 ms-lg-5 me-lg-0 ms-sm-3 me-sm-3 ms-xs-3 mx-xs-3';

  // Define the path of the login page
  const loginPagePath = '/login';

  return (
    <header className="container-fluid">
      <div className="row align-items-center">
        {/* Logo */}
        <div className="col-lg-5 col-md-12 mb-3">
          <div className="d-flex justify-content-start">
            <NavLink to="/">
              <img src="../img/movierat_logo.png" className="img-fluid" alt="movieRAT! logo"/>
            </NavLink>
          </div>
        </div>

        {/* Welcome and Navigation */}
        <div className="col-lg-7 col-md-12 text-center text-lg-end">
          {/* Conditionally render the welcome message based on the current route */}
          {location.pathname !== loginPagePath && (
            <p className="Welcome float">Welcome, Mike! | <a href="/login">Logout</a></p>
          )}
          <nav className="navbar navbar-expand-lg navbar-transparent justify-content-center justify-content-lg-end">
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
