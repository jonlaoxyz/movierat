import React, { useState, useEffect } from 'react';
import ProgramItem from './ProgramItem';

function Watchlist({ watchlist }) {
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

  const deleteProgram = (id) => {
    fetch(`http://localhost:3000/api/programs/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setPrograms(prevPrograms => {
            const updatedPrograms = prevPrograms.filter(program => program.id !== id);
            // Update Local Storage after deletion
            localStorage.setItem('watchlist', JSON.stringify(updatedPrograms.map(program => program.id)));
            
            // Broadcast a custom event to notify other components of the update
            window.dispatchEvent(new CustomEvent('watchlistUpdated'));
            
            return updatedPrograms;
          });
        } else {
          console.error('Failed to delete program');
        }
      })
      .catch(error => console.error('Error deleting program:', error));
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
            onDelete={() => deleteProgram(program.id)}
            isInWatchlist={watchlist.includes(program.id)} // Pass isInWatchlist prop
          />
        ))}
      </ul>
    </section>
  );
}

export default Watchlist;
