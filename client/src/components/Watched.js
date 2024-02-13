import React, { useState, useEffect } from 'react';
import WatchedItem from './WatchedItem';

function Watched() {
  const [watchedPrograms, setWatchedPrograms] = useState([]);

  useEffect(() => {
    fetchWatchedPrograms();
  }, []);

  const fetchWatchedPrograms = () => {
    fetch('http://localhost:3000/api/programs')
      .then(response => response.json())
      .then(programsData => {
        if (Array.isArray(programsData)) {
          const watched = programsData.filter(program => program.watched === true);
          setWatchedPrograms(watched);
        } else {
          console.error('Invalid data format received:', programsData);
        }
      })
      .catch(error => console.error('Error fetching watched programs:', error));
  };

  const deleteWatchedProgram = (id) => {
    fetch(`http://localhost:3000/api/programs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ watched: false }), // Set watched to false
    })
      .then(response => {
        if (response.ok) {
          // Remove the program from the watched list
          setWatchedPrograms(prevPrograms => prevPrograms.filter(program => program.id !== id));
        } else {
          console.error('Failed to remove program from watched');
        }
      })
      .catch(error => console.error('Error removing program from watched:', error));
  };

  return (
    <section className="Watched container mt-4">
      <ul className="col-md-12">
        {watchedPrograms.map(program => (
          <WatchedItem
            key={program.id}
            title={program.title}
            imageSrc={program.poster_image_url}
            rating={program.rating}
            runtime={program.runtime}
            genres={program.genres}
            releaseDate={program.release_date}
            status={program.status}
            tagline={program.tagline}
            description={program.description}
            onDelete={() => deleteWatchedProgram(program.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default Watched;
