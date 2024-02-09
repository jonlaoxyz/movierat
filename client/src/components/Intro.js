import React from 'react';
import { Popular } from './Popular';

class Intro extends React.Component {
  render() {
    return (
      <section>
        <div className="Intro my-5 pt-3 container">
          <h2 className="display-6">Your Movie Lover's Packrat of a Watchlist!</h2>
          <p className="lead">Discover movieRAT!, your go-to platform for effortlessly managing your movie watchlist.
            Tailored for movie enthusiasts, easily curate and organize your must-watch films in one convenient spot.
            Effortlessly add movies to your watchlist, track your viewing progress, and never miss a cinematic gem.
            Simplify your movie-watching experience with movieRAT!</p>
        </div>

      {/* Popular Movies List */}
      <Popular />
      </section>
    );
  }
}

export default Intro;
