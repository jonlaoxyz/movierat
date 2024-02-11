import React from 'react';
import { useState } from 'react';
const ProgramItem = ({
  imageSrc,
  title,
  releaseDate,
  genres,
  runtime,
  tagline,
  description,
  rating,
  onDelete,
  initialIsFavorite,
  updateFavoriteStatus,
  updateWatchedStatus
}) => {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const [isWatched, setIsWatched] = useState(false);

  const handleFavoriteClick = () => {
    const newFavStatus = !isFavorite;
    setIsFavorite(newFavStatus);
    updateFavoriteStatus(newFavStatus);
  };

  const handleWatchedClick = () => {
    const newWatchedStatus = !isWatched;
    setIsWatched(newWatchedStatus);
    updateWatchedStatus(newWatchedStatus);
  }


  return (
    <li>
      <div className="card">
        <section id="original_header" className="images inner">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xs-12 mb-2">
              <div className="poster_wrapper">
                <img
                  className="img-fluid rounded"
                  src={imageSrc ? `https://image.tmdb.org/t/p/w300${imageSrc}` : `${process.env.PUBLIC_URL}/img/no-poster-available.jpg`}
                  alt={title}
                  title={title}
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xs-12">
              <section className="program_detail ms-lg-4 ms-sm-0">
                <div className="title">
                  <h2>
                    {title}
                  </h2>
                  <h3 className="release_date">Release Date: {releaseDate}</h3>
                  <div className="facts">
                    <span className="genres">{genres}</span>
                    <span className="runtime">{runtime} min</span>
                    <span className="rating">Rating: {rating}</span> {/* Display rating */}
                  </div>
                </div>
                <div className="program_info">
                  <h3 className="tagline">{tagline}</h3>
                  <h3 className="header_info">Overview</h3>
                  <div className="overview">
                    <p>{description}</p>
                  </div>
                </div>
              </section>
              <section className="control">
                <i className={`bi bi-eye${isWatched ? ' text-success' : ''}`} onClick={handleWatchedClick}></i>
                <i className={`bi bi-heart${isFavorite ? ' text-danger' : ''}`} onClick={handleFavoriteClick}></i>
                {/* <i className="bi bi-plus-circle"></i> */}
                <i className="bi bi-trash" onClick={onDelete}></i>
              </section>
            </div>
          </div>
        </section>
      </div>
    </li>
  );
};

export default ProgramItem;