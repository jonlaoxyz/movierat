import React, { useState, useEffect } from 'react';
import '../App.css';

export const SearchItem = ({ movie, addToWatchlist }) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  // Fetch watchlist data from the database
// Fetch watchlist data from the database
const fetchWatchlist = () => {
  fetch('http://localhost:3000/api/programs')
    .then(response => response.json())
    .then(watchlistData => {
      console.log("Watchlist data:", watchlistData); // Log the watchlist data
      setIsInWatchlist(watchlistData.some(program => program.id === movie.id));
    })
    .catch(error => console.error('Error fetching watchlist:', error));
};


  useEffect(() => {
    fetchWatchlist();
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  const handleAddToWatchlist = () => {
    addToWatchlist(movie.id);
    setIsInWatchlist(true);
  };

  return (
    <section>
      <div className="card">
        <section id="original_header" className="images inner">
          <div className="row">
            <div className="col-sm-12 col-lg-4 col-xs-12 mb-2">
              <div className="poster_wrapper">
                <img
                  className="img-fluid rounded"
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : `${process.env.PUBLIC_URL}/img/no-poster-available.jpg`}
                  alt={`${movie.title} Poster`}
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-8 col-xs-12">
              <section className="program_detail ms-sm-3">
                <div className="title">
                  <h2>
                    {movie.title}
                  </h2>
                  <h3 className="release_date">Release Date: {movie.release_date ? movie.release_date.substring(0, 4) : ''}</h3>
                </div>
                <div className="program_info">
                  <h3 className="header_info">Overview</h3>
                  <div className="overview">
                    <p>{movie.overview}</p>
                  </div>
                </div>
              </section>

              <section className="control">
                {isInWatchlist ? (
                  <i
                    className="bi bi-plus-circle disabled-icon"
                    style={{ cursor: "not-allowed", pointerEvents: "none", color: "black" }}
                  ></i>
                ) : (
                  <i
                    className="bi bi-plus-circle"
                    style={{ cursor: "pointer" }}
                    onClick={handleAddToWatchlist}
                  ></i>
                )}
              </section>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
