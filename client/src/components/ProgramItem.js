import React from 'react';
const ProgramItem = ({
  imageSrc,
  title,
  releaseDate,
  genres,
  runtime,
  tagline,
  overview,
  rating,
  onDelete
}) => {    
  return (
    <li>
      <div className="card">
        <section id="original_header" className="images inner">
          <div className="row">
            <div className="col-md-4">
              <div className="poster_wrapper">
                <img 
                  className="img-fluid rounded" 
                  src={imageSrc ? `https://image.tmdb.org/t/p/w400${imageSrc}` : `${process.env.PUBLIC_URL}/img/no-poster-available.jpg`}
                  alt={title} 
                  title={title}
                />
              </div>
            </div>
            <div className="col-md-8">
              <section className="program_detail">
                <div className="title">
                  <h2>
                    {title}
                    <span className="release_date">{releaseDate}</span>
                  </h2>
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
                    <p>{overview}</p>
                  </div>
                </div>
              </section>
              <section className="control">
                <i className="bi bi-eye"></i>
                <i className="bi bi-heart"></i>
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