import React, { useState } from 'react';
import '../App.css';
import { SearchItem } from './SearchItem';

export const SearchBar = ({ setPrograms }) => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    // e.preventDefault();

    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    
    .then((res) => {
      return res.json();
    })
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

  const addToWatchlist = (movie) => {
    // Fetch additional details for the selected movie
    fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        const newProgram = {
          id: data.id, // Ensure each item has a unique ID
          title: data.title,
          posterPath: data.poster_path,
          rating: data.vote_average,
          runtime: data.runtime,
          genres: data.genres.map(genre => genre.name).join(', '),
          release_date: data.release_date,
          status: 'Released',
          tagline: data.tagline,
          overview: data.overview
        };
  
        // Add the newProgram to the programs array using setPrograms
        setPrograms(prevPrograms => [...prevPrograms, newProgram]);
      })
      .catch((error) => console.error("Failed to fetch movie details:", error));
  };

  
  

  return (
    <section className="SearchBar container mt-4">
    <div className="row">
        <div className="col-md-12">
        <form>
          <div className="form-group d-flex">

            <input 
              type="text" 
              className="form-control mr-5" 
              placeholder="Search..."
              value={query}
              onChange={onChange}
            />

            {/* <button 
              type="submit" 
              className="btn btn-primary rounded ms-3 px-4 fs-4" 
              style={{ backgroundColor: '#7520A5' }}
              
              >Search
            </button> */}

          </div>
        </form>
        </div>
    </div>


    <div>
    {results.length > 0 && (
      <ul className="results">
        {results.map((movie) => (
          <li key={movie.id}>
            <SearchItem movie={movie}
            movie={movie} 
            addToWatchlist={() => addToWatchlist(movie)}
             />
          </li>
        ))}
      </ul>
    )}
    </div> 

</section>



  )
} 