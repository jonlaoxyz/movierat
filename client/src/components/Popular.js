import React, { useState } from 'react';
import {useEffect} from 'react';

export const Popular = () => {
  const [results, setResults] = useState([]);

  // Fetch request to the TMDB API, using the API key stored in environment variables
  const fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`)
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
  }


  useEffect(() => {
    fetchMovies();
  }, []);

    // Calculate the number of items to include so the total is divisible by 3
    const divisibleByThreeCount = results.length - (results.length % 3);

    // Slice the results array to include only the calculated number of items
    const limitedResults = results.slice(0, divisibleByThreeCount);
  
    // Map over limitedResults to get an array of poster_path values
    const posterPaths = limitedResults.map(movie => movie.poster_path);

  return (
    <div>
      <h1 className="popular">Movies that are currently in theatres</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px' }}>
        {posterPaths.map((path, index) => (
          path ? <img key={index} src={`https://image.tmdb.org/t/p/w300${path}`} alt="Movie poster" /> : null
        ))}
      </div>
    </div>
  );
};
