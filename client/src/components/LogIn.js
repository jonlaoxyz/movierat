import React from 'react';
import { Link } from 'react-router-dom';

class LogIn extends React.Component {
  render() {
    return (
      <section>
        <div className="Intro my-5 pt-3 container">
          <div className="row align-items-center">
            <div className="col-md-5 text-center mt-3 mt-md-0">
              <img src="./img/theater-outside2.jpg" className="rounded-circle img-fluid" alt="movieRAT! mascot" />
            </div>
            <div className="col-md-7">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="card" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                      <div className="card-body">
                        <h3 className="card-title text-center mb-4">LOGIN</h3>
                        <form>
                          <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="mike@email.com" />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="********" />
                          </div>
                          <div className="d-grid gap-2 my-5">
                            <Link to="/" className="btn" style={{ backgroundColor: 'purple', fontSize: '1.2em', color: 'white' }}>LOGIN</Link>
                          </div>
                        </form>
                        <p className="text-center mt-3">Don't have an account? <br /><a href="/">Create an Account</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LogIn;
