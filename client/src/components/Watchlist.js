import React from 'react';
import ProgramItem from './ProgramItem'; // Assuming you have created the ProgramItem component

class Watchlist extends React.Component {
  render() {
    const { programs } = this.props; // Assuming programs is an array of movie data

    return (
      <section className="Watchlist container mt-4">
        <ul className="col-md-12">
          {programs.map(movie => (
            <ProgramItem
              key={movie.id} // Ensure each item has a unique key
              imageSrc={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : `${process.env.PUBLIC_URL}/img/000000h1.jpg`}
              title={movie.title}
              releaseDate={movie.release_date}
              genres={movie.genres}
              runtime={movie.runtime}
              tagline={movie.tagline}
              overview={movie.overview}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Watchlist;