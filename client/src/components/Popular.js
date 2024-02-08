import React, { useState } from 'react';
import {useEffect} from 'react';
import { PlusCircle } from 'react-bootstrap-icons'; // Import the PlusCircle icon from react-bootstrap-icons library

export const Popular = () => {
  const [results, setResults] = useState([]);

  // Fetch request to the TMDB API, using the API key stored in environment variables
  const fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`)
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
    <div className="now-showing">
      <h1>Now Playing</h1>
      <div className="d-flex flex-wrap justify-content-around gap-3">
      {posterPaths.map((path, index) => (
        <div key={index} style={{ position: 'relative' }}> 
          {path && (
            <>
              <img 
                src={`https://image.tmdb.org/t/p/w300${path}`} 
                alt="Movie poster" 
                title={limitedResults[index].title} 
                className="rounded" 
              />
               <div style={{ position: 'absolute', bottom: '8px', right: '8px' }}>
                <PlusCircle size={32} color="white" />
              </div> 
            </>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};
