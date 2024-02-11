import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

export const Popular = ({ addToWatchlistProp }) => {
  const [results, setResults] = useState([]);
  const [isInWatchlist, setIsInWatchlist] = useState({}); // Initialize with an empty object
  const location = useLocation();

  const fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      })
      .catch((error) => console.error("Failed to fetch data:", error));
  };

  useEffect(() => {
    fetchMovies();
  }, [location]);

  const fetchWatchlist = () => {
    fetch('http://localhost:3000/api/programs')
      .then(response => response.json())
      .then(watchlistData => {
        console.log("Watchlist data:", watchlistData); // Log the watchlist data
        const isInWatchlist = {};
        watchlistData.forEach(program => {
          isInWatchlist[program.id] = true;
        });
        setIsInWatchlist(isInWatchlist);
      })
      .catch(error => console.error('Error fetching watchlist:', error));
  };

  useEffect(() => {
    fetchWatchlist();
  }, []); // Fetch watchlist data on component mount

  const handleAddToWatchlist = (movieId) => {
    addToWatchlistProp(movieId);
    setIsInWatchlist(prevIsInWatchlist => ({
      ...prevIsInWatchlist,
      [movieId]: true
    }));
  };

  return (
    <div className="popular-list">
      <h1 className="popular">Popular Movies</h1>
      <div className="grid-container">
        {results.map((movie, index) => {
          const isInList = isInWatchlist[movie.id] || false;
          return (
            <div key={index} className="movie-item">
              <div style={{ position: 'relative' }}>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.title} Poster`} className="rounded" />
                {isInList ? (
                  <i
                    className="bi bi-plus-circle disabled-icon"
                    style={{ fontSize: "2rem", pointerEvents: "none", cursor: "not-allowed", color: "black" }}
                  ></i>
                ) : (
                  <i
                    className="bi bi-plus-circle add-watchlist-btn text-white"
                    style={{ fontSize: "2rem", cursor: "pointer" }}
                    onClick={() => handleAddToWatchlist(movie.id)}
                  ></i>
                )}
              </div>
              <div className="additional-info">{movie.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
