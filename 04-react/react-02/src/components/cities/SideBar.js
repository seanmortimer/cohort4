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
                    <h6 id="idNorth" />
                    <div>Latitude:
                      <h6 id="idNorthLat" />
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
                      <h6 id="idSouth" />
                    </div>
                    <div>Latitude:
                      <h6 id="idSouthLat" />
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
                    <div>Total population:</div>
                    <h6 id="idTotalPop" />
                    <hr />
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item active-pro">
              <div className="container-float nav-link">
                <button type="button" className="btn btn-danger btn-fill text-right" action="clear">
                  <i className="nc-icon nc-alien-33" />&nbsp;Clear server
                </button>
                <button type="button" className="btn btn-success btn-fill mt-1" action="load">
                  <i className="nc-icon nc-alien-33" />&nbsp;Clear then load
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
