// import React, { Component } from 'react';
// import axios from 'axios';
import '../App.css';

export const ProgramsList = () => {
  return (
      <section className="Program-List container mt-4">
          <ul className="col-md-12">
            {/* Card 1 */}
            <li>
              <div className="card">
                <section id="original_header" className="images inner">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="poster_wrapper">
                        <img className="img-fluid rounded" src="img/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" alt="Interstellar" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <section className="program_detail">
                        <div className="title">
                          <h2>
                            Interstellar
                            <span className="release_date">(2014)</span>
                          </h2>
                          <div className="facts">
                            <span className="certification">
                              PG
                            </span>
                            <span className="release">
                              11/05/2014 (CA)
                            </span>
                            <span className="genres">
                              Adventure, Drama, Science Fiction
                            </span>
                            <span className="runtime">
                              2h 49m
                            </span>
                          </div>
                        </div>
                        <div className="program_info">
                          <h3 className="tagline">Mankind was born on Earth. It was never meant to die here.</h3>
                          <h3 className="header_info">Overview</h3>
                            <div className="overview">
                              <p>The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.</p>
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
            {/* Card 2 */}
            <li>
              <div className="card">
                <section id="original_header" className="images inner">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="poster_wrapper">
                        <img className="img-fluid rounded" src="img/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg" alt="Die Hard" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <section className="program_detail">
                        <div className="title">
                          <h2>
                            Die Hard 
                            <span className="release_date">(1988)</span>
                          </h2>
                          <div className="facts">
                            <span className="certification">
                              18A
                            </span>
                            <span className="release">
                              07/15/1988 (CA)
                            </span>
                            <span className="genres">
                              Action, Thriller
                            </span>
                            <span className="runtime">
                                2h 12m
                            </span>
                          </div>
                        </div>
                        <div className="program_info">
                          <h3 className="tagline">Twelve terrorists. One cop. The odds are against John McClane... That's just the way he likes it.</h3>
                          <h3 className="header_info">Overview</h3>
                            <div className="overview">
                              <p>NYPD cop John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.</p>
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
            {/* Card 3 */}
            <li>
              <div className="card">
                <section id="original_header" className="images inner">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="poster_wrapper">
                        <img className="img-fluid rounded" src="img/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg" alt="Blade Runner" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <section className="program_detail">
                        <div className="title">
                          <h2>
                            Blade Runner
                            <span className="release_date">(1982)</span>
                          </h2>
                          <div className="facts">
                            <span className="certification">
                              R
                            </span>
                            <span className="release">
                              06/25/1982 (CA)
                            </span>
                            <span className="genres">
                                Science Fiction, Drama, Thriller
                            </span>
                            <span className="runtime">
                                1h 58m
                            </span>
                          </div>
                        </div>
                        <div className="program_info">
                          <h3 className="tagline">Man has made his match...now it's his problem.</h3>
                          <h3 className="header_info">Overview</h3>
                            <div className="overview">
                              <p>In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.</p>
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