import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { SearchBar } from './components/SearchBar';
import Watchlist from './components/Watchlist';
import Intro from './components/Intro';
import Footer from './components/Footer';
import { Popular } from './components/Popular'; // Import the Popular component
import './App.css';

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movieId) => {
    console.log("Adding movie to watchlist:", movieId);
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const programData = {
          title: data.title,
          id: data.id,
          poster_image_url: `https://image.tmdb.org/t/p/w400${data.poster_path}`,
          rating: data.vote_average,
          runtime: data.runtime,
          genres: data.genres.map(genre => genre.name).join(', '),
          release_date: data.release_date,
          status: data.status,
          tagline: data.tagline,
          overview: data.overview
        };
  
        fetch('http://localhost:3000/api/programs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ program: programData })
        })
        .then(response => response.json())
        .then(newProgram => {
          console.log('New program added to watchlist:', newProgram);
          // Update the watchlist state with the new program ID
          setWatchlist((prevWatchlist) => {
            const updatedWatchlist = [...prevWatchlist, newProgram.id];
            // Save the updated watchlist to Local Storage
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
            return updatedWatchlist;
          });
        })
        .catch(error => console.error('Error adding program to watchlist:', error));
      })
      .catch((error) => console.error('Error fetching movie details:', error));
  };

  return (
    <div className='App'>
      <Router>
        <NavigationBar />
        
        <Routes>
          <Route
            path="/"
            element={<Intro addToWatchlist={addToWatchlist} watchlist={watchlist} />} // Pass watchlist and addToWatchlist as props to Intro
          /> 
          <Route
            path="/search"
            element={<SearchBar addToWatchlist={addToWatchlist} watchlist={watchlist} />}
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} />} />
          <Route path="/popular" element={<Popular addToWatchlistProp={addToWatchlist} watchlist={watchlist} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
