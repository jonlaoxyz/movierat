import React from 'react';
import { useState } from 'react';
const FavoriteItem = ({
  imageSrc,
  title,
  releaseDate,
  genres,
  runtime,
  tagline,
  overview,
  rating,
  onDelete,
  updateFavoriteStatus // Add updateFavoriteStatus prop
}) => {    
  const [isFavorite, setIsFavorite] = useState(false);
  // Function to handle favorite icon click
  // Function to handle favorite icon click
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite); // Toggle the favorite status
    updateFavoriteStatus(!isFavorite); // Update the favorite status
  };

  return (
    <li>
      <div className="card">
        <section id="original_header" className="images inner">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xs-12">
              <div className="poster_wrapper">
                <img 
                  className="img-fluid rounded" 
                  src={imageSrc ? `https://image.tmdb.org/t/p/w400${imageSrc}` : `${process.env.PUBLIC_URL}/img/no-poster-available.jpg`}
                  alt={title} 
                  title={title}
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xs-12 my-sm-4">
              <section className="program_detail">
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
                  <div className="overview">
                    <p>{overview}</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </li>
  );
};

export default FavoriteItem;