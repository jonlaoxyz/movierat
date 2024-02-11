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
  
  const deleteFavoriteProgram = (id) => {
    fetch(`http://localhost:3000/api/programs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fav: false }), // Set fav to false
    })
      .then(response => {
        if (response.ok) {
          // Remove the program from the favorites list
          setFavoritePrograms(prevPrograms => prevPrograms.filter(program => program.id !== id));
          console.log('Program removed from favorites');
        } else {
          console.error('Failed to remove program from favorites');
        }
      })
      .catch(error => console.error('Error removing program from favorites:', error));
  };
  

  return (
    <section className="Favorites container mt-4">
      <ul className="col-md-12">
        {favoritePrograms.map(program => (
          <FavoriteItem
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
            onDelete={() => deleteFavoriteProgram(program.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default Favorites;
