import React from 'react';
import './App.css'; // Import the main CSS file
import NavigationBar from './Components/NavigationBar';
import SearchBar from './Components/SearchBar';
import Watchlist from './Components/Watchlist';
import Footer from './Components/Footer';

class App extends React.Component {
  render() {
    const programs = [
      {
        id: 1,
        imageSrc: "img/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        title: "Interstellar",
        releaseDate: "(2014)",
        certification: "PG",
        release: "11/05/2014 (CA)",
        genres: "Adventure, Drama, Science Fiction",
        runtime: "2h 49m",
        tagline: "Mankind was born on Earth. It was never meant to die here.",
        overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage."
      },
      {
        id: 2,
        imageSrc: "img/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg",
        title: "Die Hard",
        releaseDate: "(1988)",
        certification: "18A",
        release: "07/15/1988 (CA)",
        genres: "Action, Thriller",
        runtime: "2h 12m",
        tagline: "Twelve terrorists. One cop. The odds are against John McClane... That's just the way he likes it.",
        overview: "NYPD cop John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down."
      },
      {
        id: 3,
        imageSrc: "img/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
        title: "Blade Runner",
        releaseDate: "(1982)",
        certification: "R",
        release: "06/25/1982 (CA)",
        genres: "Science Fiction, Drama, Thriller",
        runtime: "1h 58m",
        tagline: "Man has made his match...now it's his problem.",
        overview: "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans."
      }
    ];
    
    return (
      <div className="App">
        {/* Navigation Bar */}
        <NavigationBar />

        {/* Search Bar Section */}
        <SearchBar />

        {/* Section List with Cards */}
        <Watchlist programs={programs} /> {/* Pass the programs array to the Watchlist component */}

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
