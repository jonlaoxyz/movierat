import React from 'react';
import ProgramItem from './ProgramItem';

class Watchlist extends React.Component {
  render() {
    const { programs } = this.props;

    return (
      <section className="Watchlist container mt-4">
        <ul className="col-md-12">
          {programs.map(program => (
            <ProgramItem
              key={program.id} // Ensure each item has a unique key
              imageSrc={program.posterPath} // Adjusted for the new property name
              title={program.title}
              releaseDate={program.release_date} // Adjusted for the new property name
              certification={program.certification}
              release={program.release}
              genres={program.genres}
              runtime={program.runtime}
              tagline={program.tagline}
              overview={program.overview}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Watchlist;
