import React, { useState, useEffect } from 'react';
import '../App.css';

export const SearchItem = ({ movie, addToWatchlist }) => {
  const [watchlist, setWatchlist] = useState([]);

  // Function to handle adding the movie to the watchlist
  const handleAddToWatchlist = () => {
    addToWatchlist(movie.id);
  };

  useEffect(() => {
    // Retrieve watchlist from local storage
    const storedWatchlist = localStorage.getItem('watchlist');
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist));
    }
  }, []);

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
                {watchlist.includes(movie.id) ? (
                  <i
                    className="bi bi-plus-circle disabled-icon"
                    style={{ cursor: "not-allowed", pointerEvents: "none", color: "black" }} // Make the icon look disabled
                  ></i>
                ) : (
                  <i
                    className="bi bi-plus-circle"
                    style={{ cursor: "pointer" }} // Set cursor to pointer to indicate clickable
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
