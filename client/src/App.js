import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { SearchBar } from './components/SearchBar'
import Watchlist from './components/Watchlist';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/search" element={
              <SearchBar />
          } />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
