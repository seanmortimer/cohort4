import React, { Component } from 'react';


class SideBar extends Component {
  render() {
    return (
      <div className="sidebar" id="idSideBar" data-image="../assets/img/sidebar-5.jpg" data-color="blue">
        <div className="sidebar-wrapper">
          <div className="logo">
            <div className="simple-text">Cities of the World</div>
          </div>
          <ul className="nav">
            <li>
              <div className="container-float nav-link">
                <div className="row ">
                  <i className="nc-icon nc-compass-05" />
                  <div className="col">
                    <div>Northernmost city:</div>
                    <h6>{this.props.cities.getMostNorthern()?.name}</h6>
                    <div>Latitude:
                      <h6>{this.props.cities.getMostNorthern()?.lat}</h6>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="container-float nav-link">
                <div className="row ">
                  <i className="nc-icon nc-compass-05" />
                  <div className="col">
                    <div>Southernmost city:
                      <h6>{this.props.cities.getMostSouthern()?.name}</h6>
                    </div>
                    <div>Latitude:
                      <h6>{this.props.cities.getMostSouthern()?.lat}</h6>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="container-float nav-link">
                <div className="row ">
                  <i className="nc-icon nc-single-02" />
                  <div className="col">
                    <div>Total population:
                      <h6>{this.props.cities.getPopulation().toLocaleString()}</h6>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item active-pro">
              <div className="container-float nav-link">
                <button
                  type="button"
                  className="btn btn-success btn-fill mt-1"
                  onClick={this.props.onRandom}
                >
                  <i className="nc-icon nc-alien-33" />&nbsp;Load random city
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-fill text-right"
                  onClick={this.props.onClear}
                >
                  <i className="nc-icon nc-alien-33" />&nbsp;Clear server
                </button>

              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
