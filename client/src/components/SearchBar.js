import React, { useState } from 'react';
import '../App.css';
import { SearchItem } from './SearchItem';
import { Popular } from './Popular';


export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    setQuery(e.target.value);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
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

  const addToWatchlistHandler = (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6d84c4355a7877a6b753a4cfd9ef46e4`)
      .then((response) => response.json())
      .then((data) => {
        // Create a new program object based on the movie data
        const programData = {
          movie_id: data.id,
          title: data.title,
          poster_image_url: data.poster_path,
          rating: data.vote_average,
          runtime: data.runtime,
          genres: data.genres.map(genre => genre.name).join(', '),
          release_date: data.release_date,
          status: data.status,
          tagline: data.tagline,
          overview: data.overview
        };
  
        // Send a POST request to create a new program
        fetch('http://localhost:3000/api/programs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ program: programData })
        })
        .then(response => response.json())
        .catch(error => console.error('Error creating program:', error));
      })
      .catch((error) => console.error('Error adding to watchlist:', error));
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
            <ul className="results ">
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
      </div>

      {/* Popular Movies List */}
      <Popular />

    </section>
  );
};