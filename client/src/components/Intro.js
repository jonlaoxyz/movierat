import React from 'react';
import { Popular } from './Popular';

class Intro extends React.Component {
  render() {
    return (
      <section>
        <div className="Intro my-5 pt-3 container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="display-5">Your Movie Lover's Packrat of a Watchlist!</h2>
              <p className="lead">Discover movieRAT!, your go-to platform for effortlessly managing your movie watchlist.
                Tailored for movie enthusiasts, easily curate and organize your must-watch films in one convenient spot.
                Effortlessly add movies to your watchlist, track your viewing progress, and never miss a cinematic gem.
                Simplify your movie-watching experience with movieRAT!</p>
            </div>
            <div className="col-md-4 text-center text-md-center mt-3 mt-md-0">
              <img src="./img/movierat-mascot.jpg" className="rounded-circle img-fluid" style={{ maxWidth: "350px" }} />
            </div>
          </div>
        </div>

      {/* Popular Movies List */}
      <Popular />
      </section>
    );
  }
}

export default Intro;
