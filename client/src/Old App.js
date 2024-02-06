import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      <div className="App">
        {/* <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button> */}
      {/* <!-- Header --> */}
      <header className="container-fluid">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-md-4">
            <div className="d-flex justify-content-start">
              <img src="../img/movierat_logo.png" className="img-fluid" alt="movieRAT! logo" />
            </div>
          </div>

          {/* Welcome and Navigation */}
          <div className="col-md-8 text-end">
            <p className="Welcome float">Welcome, Mike! | <a href="">Logout</a></p>
            <nav className="navbar navbar-expand-lg navbar-transparent justify-content-end">
              <a className="nav-link fs-3 me-5" href="#">Watchlist</a>
              <a className="nav-link fs-3 me-5" href="#">Favourites</a>
              <a className="nav-link fs-3" href="#">Watched</a>
            </nav>
          </div>
        </div>
      </header>

      {/* <!-- Search Bar Section --> */}
      <section className="SearchBar container mt-4">
          <div className="row">
              <div className="col-md-12">
              <form>
                <div className="form-group d-flex">
                  <input type="text" className="form-control mr-5" placeholder="Search..." />
                  <button type="submit" className="btn btn-primary rounded ms-3 px-4 fs-4" style={{ backgroundColor: '#7520A5' }}>
                    Search
                  </button>
                </div>
              </form>
              </div>
          </div>
      </section>

      {/* <!-- Section List with Cards --> */}
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
                        <i class="bi bi-eye"></i>
                        <i class="bi bi-heart"></i>
                        <i class="bi bi-plus-circle"></i>
                        <i class="bi bi-trash"></i>
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
                        <i class="bi bi-eye"></i>
                        <i class="bi bi-heart"></i>
                        <i class="bi bi-plus-circle"></i>
                        <i class="bi bi-trash"></i>
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
                        <i class="bi bi-eye"></i>
                        <i class="bi bi-heart"></i>
                        <i class="bi bi-plus-circle"></i>
                        <i class="bi bi-trash"></i>
                      </section>
                    </div>
                  </div>
                </section>

              </div>
            </li>
          </ul>
      </section>
      <section className="Footer">
        <p>movieRAT! &#169; 2024 LHL Finals Project</p>
      </section>

      </div>
    );
  }
}

export default App;
