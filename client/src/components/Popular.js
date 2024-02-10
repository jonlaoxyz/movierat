import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

export const Popular = () => {
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
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
  
    const handleWatchlistUpdate = () => {
      // Refresh watchlist from Local Storage
      const storedWatchlist = localStorage.getItem('watchlist');
      if (storedWatchlist) {
        setWatchlist(JSON.parse(storedWatchlist));
      }
    };
  
    window.addEventListener('watchlistUpdated', handleWatchlistUpdate);
  
    // Initial sync with Local Storage
    handleWatchlistUpdate();
  
    return () => {
      window.removeEventListener('watchlistUpdated', handleWatchlistUpdate);
    };
  }, [location])

  const divisibleByThreeCount = results.length - (results.length % 3);
  const limitedResults = results.slice(0, divisibleByThreeCount);

  const addToWatchlist = (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const programData = {
          title: data.title,
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
          setWatchlist(prev => {
            const updatedWatchlist = [...prev, movieId];
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
    <div className="popular-list">
      <h1 className="popular">Popular Movies</h1>
      <div className="grid-container">
        {limitedResults.map((movie, index) => (
          <div key={index} className="movie-item" style={{ position: 'relative' }}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.title} Poster`} className="rounded" />
            <div className="additional-info">{movie.title}</div>
              {watchlist.includes(movie.id) ? (
              <button
                className="btn btn-secondary disabled add-watchlist-btn"
                style={{ pointerEvents: "none" }} // Prevents the button from being clickable
                >
                Added to Watchlist
              </button>
            ) : (
              <button
                className="btn btn-primary add-watchlist-btn"
                onClick={() => addToWatchlist(movie.id)}
                >
                Add to Watchlist
              </button>
            )}
          </div>
        ))}
</div>
    </div>
  );
};
