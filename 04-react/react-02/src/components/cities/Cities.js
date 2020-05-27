import React, { Component } from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/light-bootstrap-dashboard.css';
import './cities.css';
import SideBar from './SideBar';
import Community from './communityClass';

const cities = [
  { key: 1, lat: 51.05, long: -114.05, name: 'Calgary', pop: 1340000 },
  { key: 2, lat: 53.55, long: -113.49, name: 'Edmonton', pop: 981000 },
  { key: 3, lat: 52.28, long: -113.81, name: 'Red Deer', pop: 106000 },
  { key: 4, lat: -32.78, long: -71.53, name: 'Quintero', pop: 25300 },
  { key: 5, lat: 0.00, long: 50.00, name: 'Equator Town', pop: 5000 },
  { key: 6, lat: -33.93, long: 18.42, name: 'Cape Town', pop: 3780000 },
  { key: 7, lat: 4.71, long: -74.07, name: 'Bogota', pop: 7400000 },
];

const comm = new Community();

cities.forEach((city) => comm.createCity(city));

class Cities extends Component {
  render() {
    return (
      <div>
        <h1>HERE ARE SOME CITIES!</h1>
        {/* <p>{comm.findByKey(1).name}</p> */}
        <div className="wrapper">
          <SideBar cities={comm} />
          <div className="main-panel">
            <nav className="navbar">
              <div className="container-fluid">
                <div className="navbar-brand">Check out all these cities!</div>
                {/* <button
                  href=""
                  className="navbar-toggler navbar-toggler-right"
                  type="button"
                  data-toggle="collapse"
                  aria-controls="navigation-index"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-bar burger-lines" />
                  <span className="navbar-toggler-bar burger-lines" />
                  <span className="navbar-toggler-bar burger-lines" />
                </button> */}
                {/* <div className="collapse navbar-collapse justify-content-end" id="navigation">
                  <ul className="nav navbar-nav mr-auto" />
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#idAddCity"
                        data-toggle="modal"
                        data-target="#idAddCity"
                        action="add"
                      ><i className="nc-icon nc-simple-add" />
                        <span className="d-lg-block">&nbsp;Add a city</span>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </nav>
            <div className="content">
              <div className="container-fluid">
                <div className="card-deck" id="idCardDeck">
                  <div className="card ">
                    <div className="card-header ">
                      <h4 className="card-title">Calgary</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-7 pr-0 font-weight-bold text-nowrap">
                          <div>Population:</div>
                          <div>Classification:</div>
                          <div>Hemisphere:</div>
                          <div>Latitude:</div>
                          <div>Longitude:</div>
                        </div>
                        <div className="col-5 pl-0 text-right text-nowrap">
                          <div>1,000,000</div>
                          <div>City</div>
                          <div>Northern</div>
                          <div>55.28</div>
                          <div>120.22</div>
                        </div>
                      </div>
                      <hr />
                      <div className="text-right">
                        <button
                          type="button"
                          className="btn btn-sm"
                          action="edit"
                        >Edit
                        </button>
                        <button type="button" className="btn btn-danger btn-fill btn-sm" action="delete">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* <footer className="footer">
              <div className="container-fluid">
                <nav>
                  <ul className="footer-menu" />
                  <p className="copyright text-justify">
                    © 2020{' '}
                    <a href="http://www.seanmortimer.com">Sean Mortimer</a>.
                    Check out the source code here:{' '}
                    <a
                      href="https://github.com/seanmortimer/cohort4/tree/master/03-objects"
                    >github.com/seanmortimer
                    </a>

                  </p>
                </nav>
              </div>
            </footer> */}

          </div>
        </div>
      </div>
    );
  }
}

export default Cities;
