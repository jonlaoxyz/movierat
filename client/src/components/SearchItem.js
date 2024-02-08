// import React, { Component } from 'react';
// import axios from 'axios';
import '../App.css';

export const SearchItem = ({ movie }) => {
  return (
      <section className="Program-List container mt-4">
          <ul className="col-md-12">
            <li>
              <div className="card">
                <section id="original_header" className="images inner">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="poster_wrapper">
                        <img 
                          className="img-fluid rounded" 
                          src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : `${process.env.PUBLIC_URL}/img/000000h1.jpg`}
                          alt={`${movie.title} Poster`} 
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <section className="program_detail">
                        <div className="title">
                          <h2>
                            {movie.title}
                            <span className="release_date">{movie.release_date ? movie.release_date.substring(0, 4) : ``}</span>
                          </h2>
                          <div className="facts">
                            {/* <span className="runtime">
                              2h 49m
                            </span> */}
                          </div>
                        </div>
                        <div className="program_info">
                          <h3 className="tagline">Original title: {movie.original_title}</h3>
                          <h3 className="header_info">Overview</h3>
                            <div className="overview">
                              <p>{movie.overview}</p>
                            </div>
                        </div>
                      </section>
                      
                      <section className="control">
                        <i className="bi bi-eye"></i>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-plus-circle"></i>
                        <i className="bi bi-trash"></i>
                      </section>

                    </div>
                  </div>
                </section>
              </div>
            </li>
          </ul>
      </section>
  )
}