import React from 'react';
import ProgramItem from './ProgramItem'; // Assuming you have created the ProgramItem component

class Watchlist extends React.Component {
  render() {
    const { programs } = this.props; // Assuming programs is an array of program data

    return (
      <section className="Watchlist container mt-4">
        <ul className="col-md-12">
          {programs.map(program => (
            <ProgramItem
              key={program.id} // Ensure each item has a unique key
              imageSrc={program.imageSrc}
              title={program.title}
              releaseDate={program.releaseDate}
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
