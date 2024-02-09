import React, { useState, useEffect } from 'react';
import '../App.css';

export const Popular = () => {
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

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
  }, []);

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
          console.log('Popular added to watchlist:', newProgram);
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
            {movie.poster_path ? (
              <>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="Movie poster" className="rounded" />
                <div className="additional-info">{movie.title}</div>
                <button
                  className="add-watchlist-btn btn btn-primary"
                  onClick={() => addToWatchlist(movie.id)}
                >
                  Add to Watchlist
                </button>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
