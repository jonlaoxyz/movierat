import React, { useState, useEffect } from 'react';
import ProgramItem from './ProgramItem';

function Watchlist() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = () => {
    fetch('http://localhost:3000/api/programs')
      .then(response => response.json())
      .then(programsData => {
        if (Array.isArray(programsData)) {
          setPrograms(programsData);
        } else {
          console.error('Invalid data format received:', programsData);
        }
      })
      .catch(error => console.error('Error fetching programs:', error));
  };

  return (
    <section className="Watchlist container mt-4">
      <ul className="col-md-12">
        {programs.map(program => (
          <ProgramItem
            key={program.id}
            title={program.title}
            imageSrc={program.poster_image_url} // Changed from posterImageUrl to imageSrc
            rating={program.rating}
            runtime={program.runtime}
            genres={program.genres}
            releaseDate={program.release_date}
            status={program.status}
            tagline={program.tagline}
            overview={program.description}
          />
        ))}
      </ul>
    </section>
  );
}

export default Watchlist;