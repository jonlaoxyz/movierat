import React from 'react';
import '../App.css';

export const SearchItem = ({ movie, addToWatchlist }) => {
  // Function to handle adding the movie to the watchlist
  const handleAddToWatchlist = () => {
    addToWatchlist(movie.id);
  };

  return (
    <section>
          <div className="card">
            <section id="original_header" className="images inner">
              <div className="row">
                <div className="col-md-4">
                  <div className="poster_wrapper">
                    <img
                      className="img-fluid rounded"
                      src={movie.poster_path ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : `${process.env.PUBLIC_URL}/img/no-poster-available.jpg`}
                      alt={`${movie.title} Poster`}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <section className="program_detail">
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
                    <i className="bi bi-plus-circle" onClick={handleAddToWatchlist}></i>
                    <i className="bi bi-trash"></i>
                  </section>
                </div>
              </div>
            </section>
          </div>
    </section>
  );
};