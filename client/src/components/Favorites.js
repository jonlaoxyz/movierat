// Favorites.js
import React, { useState, useEffect } from 'react';
import FavoriteItem from './FavoriteItem';

function Favorites() {
  const [favoritePrograms, setFavoritePrograms] = useState([]);

  useEffect(() => {
    fetchFavoritePrograms();
  }, []);

  const fetchFavoritePrograms = () => {
    fetch('http://localhost:3000/api/programs')
      .then(response => response.json())
      .then(programsData => {
        if (Array.isArray(programsData)) {
          const favorites = programsData.filter(program => program.fav === true);
          setFavoritePrograms(favorites);
        } else {
          console.error('Invalid data format received:', programsData);
        }
      })
      .catch(error => console.error('Error fetching favorite programs:', error));
  };

  const deleteProgram = (id) => {
    fetch(`http://localhost:3000/api/programs/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Update state after deletion
          setFavoritePrograms(prevPrograms => prevPrograms.filter(program => program.id !== id));
        } else {
          console.error('Failed to delete program');
        }
      })
      .catch(error => console.error('Error deleting program:', error));
  };
  
  // Function to update the favorite status of a program
  const updateFavoriteStatus = (programId, newFavStatus) => {
    fetch(`http://localhost:3000/api/programs/${programId}/update_fav`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fav: newFavStatus }),
    })
      .then(response => {
        if (response.ok) {
          // Handle success
          console.log('Favorite status updated successfully');
          // Update the local state or rerender the component if needed
          // Here, you can refetch favorite programs or update the state accordingly
        } else {
          // Handle failure
          console.error('Failed to update favorite status');
        }
      })
      .catch(error => {
        console.error('Error updating favorite status:', error);
      });
  };

  return (
    <section className="Favorites container mt-4">
      <ul className="col-md-12">
        {favoritePrograms.map(program => (
          <FavoriteItem
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
            // Pass the updateFavoriteStatus function as a prop to ProgramItem
            updateFavoriteStatus={(newFavStatus) => updateFavoriteStatus(program.id, newFavStatus)}
          />
        ))}
      </ul>
    </section>
  );
}

export default Favorites;
