import React, { useState } from 'react';
import {useEffect} from 'react';
import { PlusCircle } from 'react-bootstrap-icons'; // Import the PlusCircle icon from react-bootstrap-icons library

export const Popular = () => {
  const [results, setResults] = useState([]);

  // Fetch request to the TMDB API, using the API key stored in environment variables
  const fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Parsed Data:", data.results);
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

  // Calculate the number of items to include so the total is divisible by 3
  const divisibleByThreeCount = results.length - (results.length % 3);

  // Slice the results array to include only the calculated number of items
  const limitedResults = results.slice(0, divisibleByThreeCount);

  return (
    <div className="popular-list">
      <h1 className="popular">Popular Movies</h1>
      <div className="grid-container">
        {limitedResults.map((movie, index) => (
          <div key={index} className="movie-item">
            {movie.poster_path ? 
              <>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="Movie poster" className="rounded" />
                <div className="additional-info">{movie.title}</div>
              </>
              : null}
          </div>
        ))}
      </div>
    </div>
  );
};
