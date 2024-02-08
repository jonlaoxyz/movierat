import React, { useState } from 'react';
import '../App.css';
import { SearchItem } from './SearchItem';
import { Popular } from './Popular';


export const SearchBar = ({ addToWatchlist }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    setQuery(e.target.value);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
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

  // Function to add a movie to the watchlist
  const addToWatchlistHandler = (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6d84c4355a7877a6b753a4cfd9ef46e4`)
      .then((response) => response.json())
      .then((data) => {
        // Call a function to add the movie to the watchlist with the retrieved data
        addToWatchlist(data);
      })
      .catch((error) => console.error('Error adding to watchlist:', error));
  };

  return (
    <section className="SearchBar container mt-4">
      <div className="row">
        {/* <div className="col-md-12"> */}
          <form>
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control mr-5"
                placeholder="Search..."
                value={query}
                onChange={onChange}
              />
            </div>
          </form>
        {/* </div> */}
      </div>

      <div className="row">
        {results.length > 0 && (
          <ul className="results col-md-12">
            {results.map((movie) => (
              <li key={movie.id}>
                <SearchItem
                  movie={movie}
                  addToWatchlist={() => addToWatchlistHandler(movie.id)} // Pass the addToWatchlist function to the SearchItem component
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      
      
      <Popular />
      



    </section>
  );
};
