import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { SearchBar } from './components/SearchBar';
import Watchlist from './components/Watchlist';
import Favorites from './components/Favorites';
import Watched from './components/Watched';
import Intro from './components/Intro';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import './App.css';

function App() {
  // Define state to store watchlist items
  const [watchlist, setWatchlist] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Function to add a movie to the watchlist
  const addToWatchlist = (movieData) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movieData]);
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Function to handle scroll event and show/hide back-to-top button
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsVisible(scrollTop > 400); // Show the button when user scrolls down 400px
  };

  // Add event listener for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Only run once on component mount

  return (
    <div className='App'>
      <Router>
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<Intro />} />  
          <Route path="/search" element={<SearchBar addToWatchlist={addToWatchlist} />} />
          {/* Pass the watchlist state as a prop to the Watchlist component */}
          <Route path="/watchlist" element={<Watchlist programs={watchlist} />} />
          <Route path="/favourites" element={<Favorites />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
      <Footer />

      {/* Back to top button */}
      {isVisible && (
        <button className="btn btn-light back-to-top" onClick={scrollToTop}>
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
