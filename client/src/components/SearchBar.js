import React, { useState } from 'react';
import { SearchItem } from './SearchItem';
import { Popular } from './Popular';
import '../App.css';

export const SearchBar = ({ addToWatchlist }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  // Function to update watchlist state
  const updateWatchlist = (movieId) => {
    // Update watchlist state here (e.g., add the movieId to the watchlist)
    setWatchlist(prevWatchlist => [...prevWatchlist, movieId]);
  };

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

  const handleAddToWatchlist = (movieId) => {
    addToWatchlist(movieId); // Call the addToWatchlist function passed from props
    updateWatchlist(movieId); // Update watchlist state
  };

  return (
    <section>
      <div className="SearchBar container mt-4">
        <div className="row">
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
        </div>

        <div className="container col-md-12 mt-4">
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <SearchItem
                    movie={movie}
                    addToWatchlist={handleAddToWatchlist} // Pass the handleAddToWatchlist function
                    watchlist={watchlist} // Pass the updated watchlist prop
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Popular Movies List */}
      <Popular addToWatchlistProp={addToWatchlist} initialWatchlist={watchlist} />
    </section>
  );
};
