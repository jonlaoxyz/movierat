import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { SearchBar } from './components/SearchBar';
import Watchlist from './components/Watchlist';
import Intro from './components/Intro';
import Footer from './components/Footer';
// import { Popular } from './components/Popular';
import './App.css';

function App() {
  // Define state to store watchlist items
  const [watchlist, setWatchlist] = useState([]);

  // Function to add a movie to the watchlist
  const addToWatchlist = (movieData) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movieData]);
  };

  return (
    <div className='App'>
      <Router>
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<Intro />} />  
          <Route path="/search" element={<SearchBar addToWatchlist={addToWatchlist} />} />
          {/* Pass the watchlist state as a prop to the Watchlist component */}
          <Route path="/watchlist" element={<Watchlist programs={watchlist} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
